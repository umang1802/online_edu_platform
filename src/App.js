import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import CoursePage from './components/CoursePage/CoursePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './privateRoute';
import { AuthContext } from "./context/auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
      <div className="App">
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/course-page" component={CoursePage} />
        </Router>
        </AuthContext.Provider>
        </div>
    );
  }


export default App;
