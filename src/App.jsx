import React from 'react';
import "./App.css";
import { useState,useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFToken';
axios.defaults.withCredentials=true;

const client=axios.create({
  baseURL:"https://127.0.0.1:8000"
});

const App = () => {

  const [currentUser, setCurrentUser] = useState();
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');



function submitLogin(e) {
  e.preventDefault();
  client.post(
    "/login",
    {
      email: email,
      password: password
    }
  ).then(function(res) {
    setCurrentUser(true);
  });
}



  return (
    <div className='login'>
      
      <div className="wrapper">
    <div className="login-box">
        <h2>LOGIN</h2>
        <Form onSubmit={e =>submitLogin(e)}>
            <div className="inputbox">
                
                    <input type="email" value = {email} onChange={e =>setEmail(e.target.value)} required/>
                    <label>Email</label>
                
            </div>
            <div className="inputbox">
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                    <label>Password</label>
                
            </div>
          
            <Button variant='primary' type ='submit' className="btn" href='/home'>Login</Button>
            <div className="login-register">
                <p>Don't have an account?<a href='/register'
                className="register-link">Register</a></p>
            </div>
        </Form>
    </div>
</div></div>
  )
}

export default App