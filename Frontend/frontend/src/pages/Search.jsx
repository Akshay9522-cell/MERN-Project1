import React, { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Search = () => {

     const[srch,setSrch]=useState('')
     const[result,setResult]=useState([])
       
     const handleSubmit=async()=> {
          let api='http://localhost:5000/employe/search'
       // const res=await axios.post(api,{id:srch})
        //console.log(res.data)
        //setResult(res.data)
            await axios.post(api,{id:srch}).then((res)=>{
            console.log(res.data)
            setResult(res.data)
        })
    
     }
         

     const ans= result.map((e)=>{
        return(
            <tr>
                
            
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
      <h1>Search </h1>

      Search ID:<input type='number'value={srch} onChange={(e)=>{setSrch(e.target.value)}} />
      <br />
      <button onClick={handleSubmit}>SEARCH </button>
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

export default Search

