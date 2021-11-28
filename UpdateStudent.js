import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const UpdateStudent = (props) => {
  const { editStudent, students } = useContext(GlobalContext);
  const [selectedStudent, setSelectedStudent] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentStudentId = props.match.params.id;

  useEffect(() => {
    const studentId = currentStudentId;
    const selectedStudent = students.find(student => student.id === studentId);
    setSelectedStudent(selectedStudent);
  }, [currentStudentId, students])

  const onChange = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editStudent(selectedStudent);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
      <Label>RollNo</Label>
        <Input type="text" value={selectedStudent.rollNo} onChange={onChange} name="rollNo" placeholder="Enter RollNo" required></Input>
        <Label>Name</Label>
        <Input type="text" value={selectedStudent.name} onChange={onChange} name="name" placeholder="Enter student" required></Input>
        <Label>Address </Label>
        <Input type="text" value={selectedStudent.address} onChange={onChange} name="address" placeholder="Enter Address " required></Input>
        <Label>Contact Number</Label>
        <Input type="text" value={selectedStudent.contactNumber} onChange={onChange} name="contactNumber" placeholder="Enter Contact Number" required></Input>
        <Label> Email</Label>
        <Input type="text" value={selectedStudent.email} onChange={onChange} name="email" placeholder="Enter  Email" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
