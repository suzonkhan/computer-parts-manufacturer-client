import React from "react";
import { Table, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../shared/Loading";
import Swal from "sweetalert2";

const Users = () => {
  const axios = require("axios").default;
  const {
    isLoading,
    error,
    data: users,
    refetch 
  } = useQuery('users', () =>
    fetch("https://gigabite-manufacturer.herokuapp.com/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://gigabite-manufacturer.herokuapp.com/user/delete/${id}`
          )
          .then(function (response) {
            refetch();
            Swal.fire("Deleted!", "User has been removed.", "success");
            
          });
      }
    });
  };
  const handleAdminUser = (email) => {
    fetch(`https://gigabite-manufacturer.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then(res => {
        if(res.status === 403){
            toast.error('Failed to Make an admin');
        }
        return res.json()})
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            refetch();
            toast.success(`Successfully made an admin`);
        }

    })
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>

            <th>Email</th>
            <th>User Role</th>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.role ? user.role : "Customer"}</td>
              <td>
                <Button
                  className="m-2"
                  variant="primary"
                  onClick={() => handleAdminUser(user.email)}
                >
                  Admin
                </Button>
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
