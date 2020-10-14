const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const {addTask,getTask,updateTask,deleteTask}=require('../buissnessLayer/crud')
app.use(bodyParser.json()); 
require('dotenv').config();
require('../dbconfig')

app.get('/getTask',async(req,res)=>{
    let response=await getTask(req.body);
    res.send(response);
})
app.post('/addTask',async(req,res)=>{
    let response=await addTask(req.body)
    res.send(response)
})
app.put('/updateTask',async(req,res)=>{
  let response=await updateTask(req.body)
  res.send(response)
})
app.delete('/deleteTask',async(req,res)=>{
    let response=await deleteTask(req.body)
    res.send(response)
  })


app.listen(process.env.PORT,()=>{
    console.log('Server Started Listening '+process.env.PORT)

})