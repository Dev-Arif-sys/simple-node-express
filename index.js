const express=require('express');
const app=express();
const cors=require('cors')
const port=5000;

app.use(cors()) //to call from localhost it is a middelware;
app.use(express.json());// to make post data in json format
app.get('/',(req,res)=>{
    res.send('hello hi world')
})

const users=[
    {id:0,name:"ariful",email:"a@gmail.com"},
    {id:1,name:"pobon",email:"pobon@gmail.com"},
    {id:2,name:"sojib",email:"sojib@gmail.com"},
    {id:3,name:"rubayet",email:"ruabyet@gmail.com"}
]

app.get('/users',(req,res)=>{
const search=req.query.search;

if(search){
    const searchResult=users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()))
    res.send(searchResult)
}else{
    res.send(users)
}

})


app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user)
})


app.listen(port,()=>{
    console.log('this is port',{port});
})