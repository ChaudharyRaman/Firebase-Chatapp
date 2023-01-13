import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span  className='logo'>Lama Chat</span>
      <div className="user">
        <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="" />
        <span>John</span>
        <button>LOGOUT</button>
      </div>
    </div>
  )
}

export default Navbar
