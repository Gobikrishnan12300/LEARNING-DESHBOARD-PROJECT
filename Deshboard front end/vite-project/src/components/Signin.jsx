import React from 'react'
import "./Signin.css"

const Signin = () => {
  function Redirect() {
    window.location = "http://localhost:5173/LOGIN";
   }
  return (
    <div className='box'>
        <h1>
            SIGNIN ACCOUNT
        </h1>
        <div className='model'>
    <label>USER NAME</label> <br />
    <input type='name'></input> <br />
    <br />
    <label>EMAIL</label><br />
    <input type="email" required></input><br />
    <br />
    <label>PASSWORD</label> <br />
    <input type='password'></input> <br />
    <br />
    <label>GENDER</label> <br />
    <input type='radio' name="gender"></input> 
    <label>male</label>
    <input type="radio" name="gender"></input>
    <label>female</label>
     <br />
    <br />
    <label>ROLE</label><br />
    <input type="role"></input><br />
    <br />
    <label>DOB</label> <br />
    <input type='number'></input> <br />
    <br />
    
    
    <button type="submit" classname="login-btn" onClick={Redirect}>SUBMIT</button>

    </div>

    </div>
  )
}

export default Signin