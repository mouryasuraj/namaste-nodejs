import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import createSocketConnection from '../../utils/socket'
import { useDispatch, useSelector } from 'react-redux'
import { removeCurrChatUser } from '../../utils/slices/currentChatUserSlice'
import { getAllChat } from './services/chatServices'

const Chat = () => {
  const { toUserId } = useParams()
  const {user, currentChatUser} = useSelector(store => store)
  const userId = user?._id
  const dispatch = useDispatch()

  console.log("currentChatUser",currentChatUser)

  const [messageVal, setMessageVal] = useState("")
  const [messages, setMessages] = useState([])


  // Create socket connection as soon as page loads
  useEffect(() => {
    const socket = createSocketConnection()
    socket.emit('joinchat', { firstName: user.firstName, userId, toUserId })


    socket.on('messagereceived', (data) => {
      setMessages(prev => [...prev, data])
    })

    getAllChat(userId, toUserId)


    // Disconnect from socket when component unmount
    return () => {
      socket.disconnect()
      dispatch(removeCurrChatUser())
    }
  }, [])


  const handleSendMessage = () => {
    if (!messageVal) return
    const socket = createSocketConnection()
    socket.emit("sendmessage", { firstName: user.firstName, userId, toUserId, text: messageVal, photoUrl:user.photoUrl})
    console.log("photUrl",user.photoUrl)
    setMessageVal("")
  }

  console.log("sdfasdfasdfd", messages)



  return (
    <div className='border-2 border-gray-500 rounded-lg md:w-[50vw] h-[70vh] flex flex-col justify-between mx-3 md:mx-auto my-10'>
      <div>
        <h2 className='px-3 py-1'>Chat</h2>
        <hr className='py-2 text-gray-500' />
      </div>
      <div className='flex-1 overflow-y-scroll px-3 w-full'>
        {messages.map((data, index) => {
          const isCurrentUser = user._id===data.userId
          return (
            <div key={index} className={`chat chat-${isCurrentUser ? "end" : "start"} text-sm w-full`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={data.photoUrl}
                  />
                </div>
              </div>
              <div className="chat-header">
                {data.firstName}
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble bg-gray-300 text-black">{data.text}</div>
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