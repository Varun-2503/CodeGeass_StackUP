import React from 'react'
import "./Register.css";

const Register = () => {
  return (
    <div>
        <div className='register'>
      
      <div className="wrapper">
    <div className="register-box">
        <h2>Register</h2>
        <form action="#">
            <div className="inputbox">
                
                    <input type="name" required/>
                    <label>Full Name</label>
                
            </div>
            <div className="inputbox">
                
                <input type="email" required/>
                <label>Email</label>
            
             </div>

            <div className="inputbox">
                    <input type="password" required/>
                    <label>Password</label>
                
            </div>
          
            <a  href="/home" className="btn">Register</a>
            
        </form>
    </div>
</div></div>

    </div>
  )
}

export default Register