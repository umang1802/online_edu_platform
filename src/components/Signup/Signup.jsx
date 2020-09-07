import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
//import logoImg from "../img/logo.jpg";
import { Card, Form, Input, Button, Error } from '../authForm/authForms.styles';
import { useAuth } from '../../context/auth';

function Signup() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const { setAuthTokens } = useAuth();

    const postSignup = () => {
        const payload = {
            "email": userName,
            "password": password,
            "repassword": repassword
        }
        if (password === repassword) {
        axios.post("http://localhost:8001/signup", payload).then(result => {
        if (result.status === 201) {
            setAuthTokens(result.data);
            setLoggedIn(true);
        } else {
            setIsError(true);
        }
        }).catch(e => {
        setIsError(true);
        });
        }
    }

    if (isLoggedIn) {
        return <Redirect to="/login" />;
      }
  
    return (
      <Card>
        <h2>CREATE ACCOUNT...</h2>
        {/* <Logo src={logoImg} /> */}
        <Form>
            <Input
            type="username"
            value={userName}
            onChange={e => {
                setUserName(e.target.value);
            }}
            placeholder="email"
            />
            <Input
            type="password"
            value={password}
            onChange={e => {
                setPassword(e.target.value);
            }}
            placeholder="password"
            />
            <Input
            type="password"
            value={repassword}
            onChange={e => {
                setRePassword(e.target.value);
            }}
            placeholder="password"
            />
        <Button onClick={postSignup}>Sign In</Button>
      </Form>
        <Link to="/login">Already have an account?</Link>
        { isError &&<Error>The password do not match!</Error> }
      </Card>
    );
  }
  
  export default Signup;