const express = require('express');
var app = express()

const { listBooks, getBooks, postBooks, dropBooks } = require('./books');
const { listUsers, getUsers, dropUsers, postUsers} = require('./users');
const {issueBooks, returnBooks, listIssual} = require('./bookmanagement')


app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to user managment system");
})

// User Routes
app.get("/users", (req,res)=>{
    res.send(listUsers()) 
})

app.get("/users/:id", (req,res)=>{
    res.send(getUsers(req.params.id))
})

app.post("/users", (req,res)=>{
    res.send(postUsers(req.body));
})

app.delete("/users/:id", (req,res)=>{
    res.send(dropUsers(req.params.id));
})

// Books Routes
app.get("/books", (req,res)=>{
    res.send(listBooks()) 
})

app.get("/books/:id", (req,res)=>{
    res.send(getBooks(req.params.id))
})

app.post("/books", (req,res)=>{
    res.send(postBooks(req.body));
})

app.delete("/books/:id", (req,res)=>{
    res.send(dropBooks(req.params.id));
})

// Books managment system routes
app.get("/issue", (req,res)=>{
    res.send(listIssual());
})

app.post("/issue", (req,res)=>{
    res.send(issueBooks(req.body.userId,req.body.bookId));
})

app.post("/return", (req,res)=>{
    res.send(returnBooks(req.body.userId,req.body.bookId));
})

app.listen(8000, (req,res)=>{
    console.log("app is listening at http://localhost:8000")
})