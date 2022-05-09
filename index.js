const express=require('express');
const app=express();
const port=4000;

const path=require('path');

app.use(express.static(__dirname+'/static'))

app.use(express.static(__dirname+'/domManupulation'))

app.get('/home',function (req,res) {

    res.sendFile(path.join(__dirname+'/allHtmls/index.html'));


})


app.get('/about',function (req,res) {
    res.sendFile(path.join(__dirname+'/allHtmls/about.html'));
})

app.get('/create',function (req,res) {
  res.sendFile(path.join(__dirname+'/allHtmls/create.html'))
})

app.get('/details',function (req,res) {
    res.sendFile(path.join(__dirname+'/allHtmls/details.html'));
})


app.listen(port,function (req,res) {
    console.log(`Listening on ${port}`)
})