import socket from 'socket.io-client'
import { baseUrl } from './constants'

const createSocketConnection = () =>{
    return socket(baseUrl)
}

export default createSocketConnection