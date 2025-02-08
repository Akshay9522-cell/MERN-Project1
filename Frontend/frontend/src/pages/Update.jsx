import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import myimage from '../images/delete.jpg'
import myimage1 from '../images/edit.png'
import { useNavigate } from 'react-router-dom';


const Update = () => {

     const[show,setShow]=useState([])
     const navigate= useNavigate();
     const loadData=()=>{
             let api='http://localhost:5000/employe/update'

             axios.get(api).then((res)=>{
                 console.log(res.data)
                 setShow(res.data)
             })
     } 

            useEffect(()=>{
               loadData()
            },[])

       
            const myDelete=async(id)=>{
                 
                let api= `http://localhost:5000/employe/delete/?id=${id}`  
                
                 await axios.get(api)
                 
                 loadData()
             }

             const myEdit=(id)=>{
                navigate(`/edit/${id}`)
              }

            let ans=show.map((e)=>{
                return(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.post}</td>
                        <td>{e.salary}</td>
                        <td>{e.skill}</td>
                        <td><img  src={myimage} style={{width:"70px"}} onClick={()=>{myDelete(e._id)}}/></td>
                        <td><img  src={myimage1} style={{width:"70px"}} onClick={()=>{myEdit(e._id)}}/></td>
                    </tr>
                )
            })
   
  return (
    <div>
      <h1>Update Employ details</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
            
        
          <th>id</th>
          <th>First Name</th>
          <th>Post</th>
          <th>Salary</th>
          <th>Skiil</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
      {ans}
    </Table>
    </div>
  )
}

export default Update
