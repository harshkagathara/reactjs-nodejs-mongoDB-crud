import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  let History = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    rollno: ''
  });

  const { name, rollno, email } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onsubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:4000/students/create-student', user);
    History.push('/');
  }
  return (
    <div className="container">
      <br /><br />
      <div className="card">
        <div className="card-header">Add Details</div>
        <div className="card-body">
          <form onSubmit={e => onsubmit(e)}>
            <div className="form-group">
              <label for="name">Name :-</label>
              <input type="text" className="form-control" placeholder="Enter Name" value={name} name="name" onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
              <label for="email">Email :- </label>
              <input type="email" className="form-control" placeholder="Enter Email" value={email} name="email" onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
              <label for="Roll No">Roll Number :-</label>
              <input type="number" class="form-control" placeholder="Enter Roll Number" value={rollno} name="rollno" onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label"></label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddUser;

