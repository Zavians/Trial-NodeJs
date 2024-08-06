import React, { useEffect, useState } from "react";
import "../index.css";
import "bulma/css/bulma.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {}
      console.log("Failde");
  };

  return (
    <div className="colomns mt-5 is-centered">
      <div className="colomn is-half">
        <div className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link to={"/user/add"}>
                    <button className="button is-small is-danger">
                      Add User
                    </button>
                  </Link>

                  <Link to={`/user/edit/${user.id}`}>
                    <button className="button is-small is-info">Edit</button>
                  </Link>

                  {/* <button className='button is-small is-danger' onClick={()=>console.log("first")}>Add User</button> */}

                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default UserList;
