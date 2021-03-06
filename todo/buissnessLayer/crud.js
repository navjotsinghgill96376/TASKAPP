const {Task}=require('../models/taskModel')

const addTask=async(reqBody)=>{
let newTask=new Task({...reqBody});
 try{
     let AddedTask=await newTask.save()
     return AddedTask
 }
 catch(err){
     console.log('Error in Adding Task',err)
 }

}

const getTask=async(reqBody)=>{
     try{

         let result=await Task.find({...reqBody})
         if(result&& result.length===0 || !result)
            {
                let message='No Task in Database';
                return message;
            }
         return result
     }
     catch(err){
         console.log('Error in finding Task',err)
     }
    
    }
const updateTask=async(reqBody)=>{
        try{
            let filter=reqBody.filter;
            let update=reqBody.update;
            if(update && update.subtask)
            {
                let subtasks=[...reqBody.update.subtask]
                let Taskfound=await Task.findOne({...reqBody.filter})
                if(!Taskfound)
                {
                    let message='Task Not Found';
                    return message;
                }
                if(subtasks.length<Taskfound.subtask.length)
                {
                    for(let i=subtasks.length;i<Taskfound.subtask.length;i++)
                        subtasks.push(Taskfound.subtask[i])

                        update.subtask=subtasks;
                }
   
            }
            let result=await Task.findOneAndUpdate(filter,update,{
                new:true
            })
            console.log(result)
            return result
        }
        catch(err){
            console.log('Error in Updating Task',err)
        }
       
       }
const deleteTask=async(reqBody)=>{
        try{
        
            let result=await Task.findOneAndRemove({...reqBody})
            if(!result)
            {
                let message='Task Not Found';
                return message;
            }
            return result
        }
        catch(err){
            console.log('Error in Updating Task',err)
        }
       
       }


module.exports={
    addTask,
    getTask,
    updateTask,
    deleteTask
}