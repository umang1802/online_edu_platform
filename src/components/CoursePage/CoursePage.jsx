import React from 'react';
import axios from 'axios';
import TreeMenu from '../../TreeMenuContainer/index';
import Header from '../Header/Header'
import './CoursePage.css';

export default class CoursePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            courseDesc: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8001/course/${this.props.location.state.id}`).then(res => {
            this.setState({
                data: res.data,
                courseDesc: res.data.data[0].nodes[0].desc
            }, () => {
                console.log('data-->', this.state.data.data);
            });
        })
    }

    render() {
        const {
            courseDesc
        } = this.state;
        return (
            <div>
                <Header />
                <h1 className="content-heading">
                    {this.props.location.state.name}
                </h1>
                <div className="main-container">
                <div className="course-tree-container">
                    <TreeMenu
                        data={this.state.data.data}
                        onClickItem={({ key, label, ...props }) => {
                            if(!props.parent) {
                                this.setState({
                                    courseDesc: props.desc
                                })
                            }
                        }}
                        debounceTime={125}>
                    </TreeMenu>
                    </div>
                    <div className="content-card">
                        <h2 className="content-heading-card">
                            {courseDesc.title}
                        </h2>
                        <div className = "content-img">
                            <img src = {courseDesc.image} className="content-img" />
                        </div>
                        <div className="text-content">
                            <p>
                                {courseDesc.textcontent}
                            </p>
                        </div>
                    </div>
                
                </div>
               
            </div>
        )
    }
}
