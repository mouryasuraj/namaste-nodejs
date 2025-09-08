const socket = require('socket.io')

const initializeSocket = (server) =>{
    const io = socket(server, {cors:{
        origin:process.env.ORIGIN
    }})
    io.on('connections',()=>{
        socket.on("joinchat", ()=>{})
        socket.on("sendmessage", ()=>{})
        socket.on("disconnect", ()=>{})
    })
}

module.exports = initializeSocket