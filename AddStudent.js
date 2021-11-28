import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddStudent = () => {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const { addStudent } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: uuid(),
      name,
      rollNo,
      address,
      contactNumber,
      email,
    }
    addStudent(newStudent);
    history.push("/");
  }

  const onChange = (e) => {
   console.log("rr",e.target.name)
   if(e.target.name === "rollNo"){
    setRollNo(e.target.value);
   }else if(e.target.name === "name"){
    setName(e.target.value);
   }else if(e.target.name === "address"){
    setAddress(e.target.value);
   }else if(e.target.name === "contactNumber"){
    setContactNumber(e.target.value);
   }else if(e.target.name === "email"){
    setEmail(e.target.value);
   }
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>RollNo</Label>
        <Input type="text" value={rollNo} onChange={onChange} name="rollNo" placeholder="Enter RollNo" required></Input>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter student" required></Input>
        <Label>Address </Label>
        <Input type="text" value={address} onChange={onChange} name="address" placeholder="Enter Address " required></Input>
        <Label>Contact Number</Label>
        <Input type="text" value={contactNumber} onChange={onChange} name="contactNumber" placeholder="Enter Contact Number" required></Input>
        <Label> Email</Label>
        <Input type="text" value={email} onChange={onChange} name="email" placeholder="Enter  Email" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
