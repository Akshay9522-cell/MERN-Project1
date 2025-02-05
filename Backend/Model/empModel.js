const mongoose=require('mongoose')

const emmploye=new mongoose.Schema({

    id:Number,
    name:String,
    post:String,
    salary:Number,
    skill:String
})

module.exports=mongoose.model('empdata',emmploye);