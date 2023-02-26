import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const initialValues = {
    email: "",
    password: "",
    username: "",
    confirm_password: "",
  };
  const errors = [];
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address format")
      .required("*Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("*Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    username: Yup.string()
      .min(8, "Username must be 8 characters at minimum")
      .required("*Username is required"),
  });

  return (
    <div>
      <div className="main-div">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            axios
              .post("http://localhost:8000/register/", values)
              .then((res) => {
                localStorage.setItem("user_data", JSON.stringify(res.data));
                navigate("/")
              })
              .catch((err) => {
                Object.values(err.response.data).map((error) => {
                  Object.values(error).map((data) => {
                    errors.push(data);
                  });
                });
                alert(errors);
                resetForm(initialValues);
              });
          }}
        >
          {({ errors, touched }) => (
            <div className="card card-secondary col-md-6 offset-md-3">
              <div className="card-header">
                <h3 className="card-title">Sign Up</h3>
              </div>
              <Form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername">Username</label>
                    <Field
                      name="username"
                      className="form-control"
                      placeholder="Username"
                    />
                    {errors.username && touched.username ? (
                      <div>{errors.username}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Field
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Field
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Confirm Password
                    </label>
                    <Field
                      name="confirm_password"
                      className="form-control"
                      placeholder="Please confirm Your Password"
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <div>{errors.confirm_password}</div>
                    ) : null}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block"
                  >
                    Submit
                  </button><br />
                  <p className="login offset-md-3">Already have an account ? <a href="#"><Link to="/">Login</Link></a></p>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
