const express=require('express')

const empController=require('../Controllers/EmpControllers')

const route= express.Router()

route.get('/home',empController.Home)
route.post('/insert',empController.Insert)
route.get('/display',empController.Display)
route.post('/search',empController.Search)
route.get('/update',empController.Update)
route.get('/delete',empController.Delete)
route.post('/edit',empController.Edit)
route.post('/editdatasave',empController.empEditSave)



module.exports=route