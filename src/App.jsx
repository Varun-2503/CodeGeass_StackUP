import React from 'react';
import "./App.css";

const App = () => {
  
  return (
    <div className='login'>
      
      <div className="wrapper">
    <div className="login-box">
        <h2>LOGIN</h2>
        <form action="#">
            <div className="inputbox">
                
                    <input type="email" required/>
                    <label>Email</label>
                
            </div>
            <div className="inputbox">
                    <input type="password" required/>
                    <label>Password</label>
                
            </div>
          
            <a  href="/home" className="btn">Login</a>
            <div className="login-register">
                <p>Don't have an account?<a href="/register" className="register-link">Register</a></p>
            </div>
        </form>
    </div>
</div></div>
  )
}

export default App
