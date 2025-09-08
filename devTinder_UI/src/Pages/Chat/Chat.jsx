import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
  const { toUserId } = useParams()
  return (
    <div className='border-2 border-gray-500 rounded-lg md:w-[50vw] h-[70vh] flex flex-col justify-between mx-3 md:mx-auto my-10'>
      <div>
        <h2 className='px-3 py-1'>Chat</h2>
        <hr className='py-2 text-gray-500' />
      </div>
      <div className='flex-1 overflow-y-scroll px-3'>
        <div className="chat chat-start text-sm">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble bg-gray-300 text-black">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end text-sm">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble bg-gray-700">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
      }} className='flex items-center gap-4 m-3'>
        <input type='text' placeholder='type.......' className='outline-none text-lg w-full bg-gray-700 px-4 py-2 text-gray-200 rounded-2xl' />
        <button className='btn btn-primary'>Send</button>
      </form>
    </div>
  )
}

export default Chat