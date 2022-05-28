import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const axios = require("axios").default;
    const [dbUser, setDbUser] = useState({})
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    useEffect(()=>{
      axios.get(`https://gigabite-manufacturer.herokuapp.com/user/${user.email}`).then(function (response) {
        setDbUser(response.data);  
      });
      console.log(dbUser);
    }, [])


      const onSubmit = async  (userInfo) => {   
        axios
        .put(`https://gigabite-manufacturer.herokuapp.com/user/update/${user.email}`, userInfo)
        .then(function (response) { 
          console.log(response); 
          toast("User info updated successfully!");
          setDbUser(response.data); 
        })
        .catch(function (error) {
          console.log(error);
        }); 
    
      }
    return (
        <div className='page-block '>
            <Container>
            <Row className="justify-center">
        <Col xs={12} sm={6} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <input defaultValue={user.displayName}
                  className="form-control"
                  {...register( "name", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input defaultValue={user.email}
                  className="form-control"
                  {...register( "email", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <input 
                defaultValue={dbUser?.phone}
                  className="form-control"
                  {...register( "phone", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Education</Form.Label>
                <input  
                 defaultValue={dbUser?.education}
                 className="form-control"
                  {...register( "education", 
                  {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>LinkedIn profile link</Form.Label>
                <input 
                defaultValue={dbUser?.linkedin}
                 className="form-control"
                  {...register( "linkedin", 
                  {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Street address</Form.Label>
                <input 
                defaultValue={dbUser?.address}
                  className="form-control"
                  {...register( "address", 
                  {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City </Form.Label>
                <input 
                defaultValue={dbUser?.city}
                  className="form-control"
                  {...register( "city", 
                  {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>District </Form.Label>
                <input 
                defaultValue={dbUser?.district}
                  className="form-control"
                  {...register( "district",
                  {
                    required: true,
                  })}
                />
              </Form.Group>
              <input className='btn btn-primary w-100' type="submit" value="Update User" />
            </form>
          </Col>
        </Row>

            </Container>
        </div>
    );
};

export default MyProfile;