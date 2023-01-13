import React from 'react'

const Search = () => {
  return (
    <div className='search' >
      <div className="searchForm">
        <input type="text" placeholder='Find a User' />
      </div>
      <div className="userChat">
        <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
