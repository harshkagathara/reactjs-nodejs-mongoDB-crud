import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:4000/students/');
        setUser(result.data.reverse());
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:4000/students/delete-student/${id}`);
        loadUsers();
    }
    return (

        <div className="container">
            <br />
            <h1>Student List</h1>
            <br />
            <table class="responsive-table">

                <thead>
                    <tr>
                        <th scope="col">Sr.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Roll No</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.rollno}</td>
                                <td>
                                    <Link className="btn btn-outline-warning mr-2" to={`/student-view/${user._id}`}><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/edit-student/${user._id}`}><i className="fa fa-edit"></i></Link>
                                    <Link class="btn btn-outline-danger mr-2" onClick={() => deleteUser(user._id)}><i className="fa fa-trash-o"></i></Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">Sources: <Link to="https://github.com/harshkagu29/nodejs-mongodb-express-ejs-crud" rel="external">Github</Link> &amp; <Link  to="https://infusion-infotech.com/" rel="external">Infusion Infotech</Link>. Data is current as of May 6, 2021.</td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}
export default Home;