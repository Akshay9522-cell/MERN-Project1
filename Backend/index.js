const express=require('express')
const emproute=require('./Routes/empRoute')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employeData').then(()=>{
    console.log("DB connected successfully")
})
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employe',emproute)

app.listen(5000,()=>{
    console.log('server is running at 5000')
})