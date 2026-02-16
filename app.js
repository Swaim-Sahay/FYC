const express=require('express');               //boiler-plate code for express
const app=express();
const path=require('path');                     //import path module

const http=require('http');                     //line 4-7 boiler-plate code for socketio
const server=http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

app.set("view engine","ejs");                   //boiler-plate code for ejs
app.use(express.static(path.join(__dirname,"public")));  //use app.use instead of app.set

io.on("connection",function(socket){
    socket.on("send-location", function(data){
        io.emit("receive-location", {id: socket.id, ...data});
    });
    console.log("connected");
    
    socket.on("disconnect", function(){
        io.emit("user-disconnected", socket.id);
    });
})

app.get("/",function(req,res){
    res.render("index");
})

server.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
});