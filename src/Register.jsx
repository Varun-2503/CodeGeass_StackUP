import React from 'react'
import "./Register.css";
import { useState,useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// axios.defaults.xsrfCookieName='csrftoken';
// axios.defaults.xsrfHeaderName='X-CSRFToken';
// axios.defaults.withCredentials=true;

// const client=axios.create({
//   baseURL:"https://127.0.0.1:8000"
// });

const Register = () => {
  const [currentUser, setCurrentUser] = useState();
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/login",
        {
          email: email,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
      });
    });
  }
  
  return (
    <div>
        <div className='register'>
      
      <div className="wrapper">
    <div className="register-box">
        <h2>Register</h2>
        <Form onSubmit={e=>submitRegistration(e)}>
            <div className="inputbox">
                
                    <input type="name" value={username} onChange={e=>setUsername(e.target.value)}required/>
                    <label>Full Name</label>
                
            </div>
            <div className="inputbox">
                
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}required/>
                <label>Email</label>
            
             </div>

            <div className="inputbox">
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                    <label>Password</label>
                
            </div>
          
            <Button variant='primary' type='submit' href="/home" className="btn">Register</Button>
            
        </Form>
    </div>
</div></div>

    </div>
  )
}

export default Register