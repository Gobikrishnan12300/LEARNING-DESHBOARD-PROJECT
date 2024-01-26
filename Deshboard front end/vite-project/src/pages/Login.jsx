
import React from 'react'
import "./Login.css"

const Login = () => {
  
  return (
    <div className='login'>
    
    <div className='image'>
      <img src="data:image/jpeg;base64,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"></img>
      <h1>LOG IN ACCOUNT</h1>
      <form>

        <div className="input-wrapper">
          <label>EMAIL ID</label> <br />
          <input type="text" placeholder='email'/>
        </div>
        <div className="input-wrapper"><br />
        <label>PASSWORD</label> <br />  
        
        <input type="password" placeholder='password' />
        </div>
        <div className="sub-wrapper"> <br />
          <button type="submit" classname="login-btn">SUBMIT</button>
          <div className='links'>
            <p>create a account?</p>
            <p>forget password?</p>

          </div>
        </div>
      </form>
    </div>
    <div classname="card">
      <p classname="read-the-doc">&copy;2024-LEARNING ONLINE</p>
    </div>
    </div>
  )
}

export default Login


