import React, {useState} from "react";
import axios from 'axios';
import { Link, Redirect  } from 'react-router-dom';
//import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button, Error } from '../authForm/authForms.styles';
import { useAuth } from '../../context/auth';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    const payload = {
        "email": userName,
        "password": password,
    }
    axios.post("http://localhost:8001/login", payload).then(result => {
      if (result.status === 200) {
        console.log('result-->', result);
        setAuthTokens(result.data.accessToken);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Card>
      {/* <Logo src={logoImg} /> */}
      <h2>PLEASE LOGIN</h2>
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
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;