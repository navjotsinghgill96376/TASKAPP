const mongoose=require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log('Database Connected')
})
.catch(err=>{
    console.log('Error in Connecting '+err)
})
