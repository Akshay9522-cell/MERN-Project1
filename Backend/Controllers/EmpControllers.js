const empModel=require('../Model/empModel')

const Home=(req,res)=>{
     res.send("this is home page")
}
const Insert= async (req,res)=>{
       const{id,name,post,salary,skill}=req.body

       const saveData= await empModel.create({
          id:id,
          name:name,
          post:post,
          salary:salary,
          skill:skill
       })
       console.log(req.body)
    res.send(saveData)
}

const Display=async(req,res)=>{
     const data =  await empModel.find()

        res.send( data)
}

const Search=async(req,res)=>{
       const{id}=req.body
         
       const data=await empModel.find({id:id})
       res.send(data)
}

const Update=async(req,res)=>{
       const{id,name,post,salary,skill}=req.body

       const data= await empModel.find()
        res.send(data)
}

  const Delete= async(req,res)=>{
       const {id}=req.query
       await empModel.findByIdAndDelete(id)
       res.send("data deleted")
  }


  const Edit=async(req, res)=>{
    const { id }= req.body;
     const Data = await empModel.findById(id);
     res.send(Data);
  }
  const empEditSave=async(req, res)=>{
   const {_id } =req.body;
   await empModel.findByIdAndUpdate(_id, req.body);
   res.send("Data succesfully updated!!!");
 }
  


module.exports={
    Home,
    Insert,
    Display,
    Search,
    Update,
    Delete,
    Edit,
    empEditSave   
}