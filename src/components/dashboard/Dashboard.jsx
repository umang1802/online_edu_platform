import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { useAuth } from "../../context/auth";
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { CatalogueHeading, Button } from '../authForm/authForms.styles'

const Dashboard = (props) => {
    const { setAuthTokens } = useAuth();
    const [courseData, setCourseData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [courseid, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("")
    function logOut() {
        setAuthTokens(null);
      }

      useEffect(() => {
        getCatalogue();
      },[]);

      const getCatalogue = () => {
        axios.get('http://localhost:8001/catalogue').then((res) => {
            if(res.status===200) {
                setCourseData(res.data);
            }
      }).catch( e => e)
      }

      const handleJoinCourse = (id, name) => {
         setRedirect(true);
         setCourseId(id);
         setCourseName(name);
      }

      if(redirect) {
        props.history.push({
            pathname: '/course-page',
            state: { id: courseid, name: courseName }
          });
      }

    return (
        <div>
            <Header />
            <CatalogueHeading>
                <h1>
                    YOUR COURSES
                </h1>
            </CatalogueHeading>
            <Container>
                <CardDeck>
                {courseData.map(data => {
                return (
                    <Card>
                        <Card.Img variant="top" src={data.image} />
                        <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button onClick={() => handleJoinCourse(data.id, data.name)}>
                            Join this course
                        </Button>
                        </Card.Footer>
                    </Card>
                )
            })}
            </CardDeck>
        </Container>
            
        </div>
    )

    }

export default Dashboard;