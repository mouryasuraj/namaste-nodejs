/*

// Websocket and socket.io

1. We are going to use https://socket.io library.

// Websockets
1. Its a bidireactional connection.
2. Socket.io enabled low latency, bidirectional and event based communication between a client and server.
3. There will be code for websocket on client and server as well.

// Backend Configuration
1. npm i socket.io
2. first we have to create a server using http modules
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
7. socket.on("joinChat", ({userId, toUserId})=>{})
    a. whenever a connection made it will create a room and room can have room id and participants
    b. anyone who joins that room can chat with each other.



// UI Configuration
1. npm i socket.io-client
2. Create configuration file and create an socket
    ex: 
        import io from 'socket.io-client
        const createSocketConnection = () =>{
            return io(baseUrl)   // backend url    
        }

3. Connect to backend when chat page loads
    ex:
        useEffect(()=>{
            const socket = createSocketConnection()
            socket.emit('joinChat', {userId,toUserId})

            // Disconnect from socket when component unmount
            return ()=>{
            socket.disconnect()
            }
        },[])



*/