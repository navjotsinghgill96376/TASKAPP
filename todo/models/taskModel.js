const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const TaskSchema = new Schema({
  author: ObjectId,
  title: String,
  createdAt:{ type : Date, default: Date.now },
  subtask:[],
  status:Boolean
});

const Task = mongoose.model('Task', TaskSchema);

module.exports={
    Task
}