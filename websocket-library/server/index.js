const WebSocket = require('ws')
const server = new WebSocket.Server({port:'8080'})

console.log('server on');

server.on('connection',socket=>{
    console.log('established connection!')
    socket.on('message',message =>{
        console.log(`Server receive message: ${message}`)
        socket.send(`Server receive message: ${message}`)
    })
})