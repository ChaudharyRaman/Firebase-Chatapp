import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat' >
      <div className='chatInfo'>
        <span>Jane</span>
        <div className="chatIcons">
          <i className="fas fa-video"></i>
          <i className="fas fa-phone"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
        <Messages/>
        <Input />
    </div>
  )
}

export default Chat
