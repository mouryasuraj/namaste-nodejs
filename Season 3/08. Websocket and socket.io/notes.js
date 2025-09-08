/*

// Websocket and socket.io

1. We are goint to use https://socket.io library.

// Websockets
1. Its a bidireactional connection.
2. Socket.io enabled low latency, bidirectional and event based communication between a client and server.
3. There will be code for websocket on client and server as well.

// Backend Configuration
1. npm i socket.io
2. first we have to create a server usinh http modules
    Ex: 
    const app = express()
    const server = http.createServer(app)
    server.listen(4000, callbackFn)
2. After creating server, we have to create a socket using socket.io
    const socket = require('socket');
3. Then createIO using socket and pass the server in the socket function with cors options
    const io = socket(server, {
        cors:{
        origin: "http://localhost:5173"
        }
    })
4. After creating IO, listen on 'connection event', whenever connection made this function will run
    io.on('connections, () =>{})
5. we can listen events inside this like
    io.on('connections, () =>{
        socket.on("joinChat", ()=>{})    
        socket.on("sendMessage", ()=>{})    
        socket.on("disconnect", ()=>{})    
    })

6. These are the configuration we have to do in backend

*/