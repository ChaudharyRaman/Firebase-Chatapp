import React from 'react'
import Add from '../img/addAvatar.png'
const Register = () => {
    return (
      <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo' >Lama Chat</span>
            <span className='logo' >Register</span>
            <form >
                <input type="text" name="" id="" placeholder='Display Name' />
                <input type="email" name="" id="" placeholder='Display Email'/>
                <input type="password" name="" id="" placeholder='Password'/>
                <input style={{display:'none'}} type="file" name="" id="" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add a Avatar</span>
                </label>
                <button>SignUp</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
      </div>
    )
}

export default Register
