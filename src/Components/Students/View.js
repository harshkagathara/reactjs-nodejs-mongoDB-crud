import axios from 'axios';
import React, { useState,useEffect} from 'react';
import {useParams } from 'react-router-dom';


const Profile = () => {
    const { id } = useParams();

    const [user, setUser] = useState({
        name:"",
        rollno:"",
        email:"",
     
    });
    useEffect(() => {
        loadUser();
    },[])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:4000/students/edit-student/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container w-25 p-3 mt-5">
        <div className="card">
            <div className="card-header">Details</div>
                <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item"><b>Name</b> :- {user.name}</li>
                    <li className="list-group-item"><b>Roll no</b> :- {user.rollno}</li>
                    <li className="list-group-item"><b>Email</b> :- {user.email}</li>
                </ul>
            </div>
            <div className="card-footer">By React</div>
            </div>
        </div>
    )
}
export default Profile;