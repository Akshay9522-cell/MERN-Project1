import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {

    const[input,setInput]=useState({})
     
    const handleInput=(e)=>{
        
         let name=e.target.name
         let value=e.target.value

         setInput((values=>({...values,[name]:value})))
         console.log(input)
    }
     const handleSubmit=()=>{
         console.log(input)
         let api='http://localhost:5000/employe/insert'

         axios.post(api,input).then((res)=>{
            console.log(res.data);
            alert('data save!')
         })
     }
      
  return (
    <div>
      
       EmpID:<input type='number' name="id" onChange={handleInput}/> <br />
      EmpName:<input type='text' name="name" onChange={handleInput} /> <br />
      EmpPost:<input type='text' name="post" onChange={handleInput} /> <br />
      EmpSalary:<input type='number' name="ssalary" onChange={handleInput} /> <br />
      EmpSkills:<input type='text' name="skills" onChange={handleInput}/> <br />

      <button onClick={handleSubmit}>save </button>
    </div>
  )
}

export default Insert

 