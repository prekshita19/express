//HTTP server setup

var http=require('http');
http.createServer((req,res)=>{
    res.write("Running HTTP server");
    res.end();
}).listen(5000,()=>console.log("Running on port 5000 "));

//Express Setup

const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send('Running Express Server')
})
app.listen(5001,()=>console.log("Running on port 5001"));