const express = require("express");
const fs=require('fs');
const users = require('./MOCK_DATA.json');

const app =express();
const PORT=3000;

// middleware - plugin to store the data  in json file
app.use(express.urlencoded({extended: false}));
// Routes

app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/users", (req,res)=>{
const html=`
<ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`)}
</ul>
`;
res.send(html);
});


app
.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id); // Convert `id` to a number
    const user = users.find(user => user.id === id); // Find user with matching ID
    return res.json(user);
}).patch((req,res) => {
    // Edit with user id
    return res.json({status: "pending"});
})
.delete((req,res)=>{
    // delete with user id
    return res.json({status: "pending"});

});

app.post("/api/users",(req,res)=>{
   const body=req.body;
   users.push({...body,id: users.length+1});
   fs.writeFile('./MOCK_DATA.JSON',JSON.stringify(users), (err, data) => {
    return res.json({status: "Success", id:  users.length+1});
   });    
});
/* 
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id); // Convert `id` to a number
    const user = users.find(user => user.id === id); // Find user with matching ID
    return res.json(user);
}); */

/* // crete a new user
app.post('/api/users', (req,res) => {
    return res.json({status:"pending"});
});


// edit he user with id
app.patch('/api/users/:id', (req,res) => {
    return res.json({status:"pending"});
});


// delete he user with id
app.delete('/api/users/:id', (req,res) => {
    return res.json({status:"pending"});
}); */

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));

