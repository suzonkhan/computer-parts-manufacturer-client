import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [signInWithEmailAndPassword,  loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="page-block h-100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6">
            <div className="card p-5">
              <h3 className="text-center mt-0 my-4">Login</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <input
                    className="form-control"
                    {...register("email", { 
                      required: true,
                     })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <input
                    className="form-control"
                    type="password"
                    {...register("password", { required: true })}
                  />
                </Form.Group>

                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit" className="btn btn-info w-100">
                  Submit
                </button>
              </form>
              <hr />
            or
            <Button  onClick={() => signInWithGoogle()} variant="info" className='w-100'> Login With Google </Button>
              <p className="my-3">
                {" "}
                Don't have account <Link to="/registration"> create now.</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
