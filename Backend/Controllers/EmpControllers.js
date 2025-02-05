const empModel=require('../Model/empModel')

const Home=(req,res)=>{
     res.send("this is home page")
}
const Insert= async (req,res)=>{
       const{id,name,post,ssalary,skills}=req.body

       const saveData= await empModel.create({
          id:id,
          name:name,
          post:post,
          salary:ssalary,
          skill:skills
       })
       console.log(req.body)
    res.send(saveData)
}

const Display=async(req,res)=>{
     const data =  await empModel.find()

        res.send( data)
}





module.exports={
    Home,
    Insert,
    Display   
}