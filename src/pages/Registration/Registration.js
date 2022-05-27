import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);
  const onSubmit = async (data) => {
    const displayName = data.displayName;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
  }
  return (
    <div className="page-block h-100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6">
            <div className="card p-5">
              <h3 className="text-center mt-0 my-4">Create Account</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                 
                  <input
                  className="form-control"
                    {...register("displayName", {
                      required: 'Please enter you name.'
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.displayName?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <input
                    className="form-control"
                    {...register("email", {
                      required: 'Please enter you email.'
                    })}
                  />
                   <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <input
                    type="password"
                    className="form-control"
                    {...register("password", {
                      required: 'Please enter you password.'
                    })}
                  />
                   <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>

                <button type="submit" className="btn btn-info w-100">
                  Submit
                </button>
              </form>

              <p className="my-3">
                {" "}
                Already have account? <Link to="/login"> Login now.</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
