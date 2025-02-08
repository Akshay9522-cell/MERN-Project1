import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Edit = () => {
  const {id} = useParams();
    const [mydata, setMydata] = useState({});


    const loadData=async()=>{
    let api="http://localhost:5000/employe/edit";
    const res = await axios.post(api, {id:id});
    setMydata(res.data);
    console.log(res.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

    const handleInput=(e)=>{
      let name= e.target.name;
      let value=e.target.value;
      setMydata(values=>({...values, [name]:value}));
      console.log(mydata);
 }
 const handleSubmit=async(e)=>{
  e.preventDefault();
  let api="http://localhost:5000/employe/editdatasave";
  const res= await axios.post(api, mydata);
  alert("Record Succesfully updated!!!");
  console.log(res);
}
    
  return (
    <>
    <h1>EDIT employe Data</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee No.</Form.Label>
        <Form.Control type="text" name="id"  value={mydata.id}  onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text" name="name" value={mydata.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text" name="post" value={mydata.post} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="number" name="salary" value={mydata.salary}  onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Skill</Form.Label>
        <Form.Control type="text" name="skill" value={mydata.skill}  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Edit
