import React from 'react'
import Add from '../img/addAvatar.png'
const Login = () => {
    return (
      <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo' >Lama Chat</span>
            <span className='logo' >Login</span>
            <form >
                <input type="email" name="" id="" placeholder='Display Email'/>
                <input type="password" name="" id="" placeholder='Password'/>
                <button>SignIn</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
      </div>
    )
}

export default Login
