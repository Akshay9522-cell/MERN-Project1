import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const Display = () => {

 const[empdata,setEmpdata]=useState([])

  
 function loadData(){
         let api='http://localhost:5000/employe/display'
         
         axios.get(api).then((res)=>{
             console.log(res.data)
             setEmpdata(res.data)
         })
 }
  
  useEffect(()=>{
       loadData()
  },[])

   let sno=0
  
  let ans= empdata.map((e)=>{
    sno++
        return(
            <tr>
                
                <td>{sno}</td>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.post}</td>
                <td>{e.salary}</td>
                <td>{e.skill}</td>
            </tr>
        )
            
       
  })

  return (
    <div>
          <Table striped bordered hover>
      <thead>
        <tr>
            
          <th>Sno</th>
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

export default Display
