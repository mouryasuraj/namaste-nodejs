import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import createSocketConnection from '../../utils/socket'
import { useSelector } from 'react-redux'

const Chat = () => {
  const { toUserId } = useParams()
  const user = useSelector(store => store.user)
  const userId = user?._id
  console.log(user);

  const [messageVal, setMessageVal] = useState("")
  const [messages, setMessages] = useState([])


  // Create socket connection as soon as page loads
  useEffect(() => {
    const socket = createSocketConnection()
    socket.emit('joinchat', { firstName: user.firstName, userId, toUserId })


    socket.on('messagereceived', ({ firstName, text,userId, toUserId }) => {
      console.log("asdfsdfsd", text);
      setMessages(prev => [...prev, { firstName, text,userId }])
    })


    // Disconnect from socket when component unmount
    return () => {
      socket.disconnect()
    }
  }, [])


  const handleSendMessage = () => {
    if (!messageVal) return
    const socket = createSocketConnection()
    socket.emit("sendmessage", { firstName: user.firstName, userId, toUserId, text: messageVal })


  }



  return (
    <div className='border-2 border-gray-500 rounded-lg md:w-[50vw] h-[70vh] flex flex-col justify-between mx-3 md:mx-auto my-10'>
      <div>
        <h2 className='px-3 py-1'>Chat</h2>
        <hr className='py-2 text-gray-500' />
      </div>
      <div className='flex-1 overflow-y-scroll px-3'>
        {messages.map((data, index) => {
          return (
            <div key={index} className={`chat chat-${user?._id===data.userId ? "end" : "start"} text-sm`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                {data.firstName}
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble bg-gray-300 text-black">{data.text}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          )
        })}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
      }} className='flex items-center gap-4 m-3'>
        <input
          value={messageVal}
          onChange={(e) => {
            setMessageVal(e.target.value)
          }}
          type='text'
          placeholder='type.......'
          className='outline-none text-lg w-full bg-gray-700 px-4 py-2 text-gray-200 rounded-2xl' />
        <button onClick={handleSendMessage} className='btn btn-primary'>Send</button>
      </form>
    </div>
  )
}

export default Chat