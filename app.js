const express =require('express')
const http =require('http')
const sockets = require("socket.io").Server
const app = express()

const servers =http.createServer(app)
const io = new sockets (servers,{
    cors:{
        origin:"*"
    }
})


io.on("connection",(socket)=>{
    console.log('we are connected');
 socket.on("chat",chat=>{
    io.emit('chat',chat)
 })

 socket.on('disconnect',()=>{
    console.log('disconnected');
 })

})



servers.listen(3000,()=>{
    console.log("listening to port 3000");
})