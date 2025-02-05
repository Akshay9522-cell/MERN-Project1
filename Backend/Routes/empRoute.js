const express=require('express')

const empController=require('../Controllers/EmpControllers')

const route= express.Router()

route.get('/home',empController.Home)
route.post('/insert',empController.Insert)
route.get('/display',empController.Display)



module.exports=route