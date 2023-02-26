import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const errors = [];
  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  const [user, setUser] = useState()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address format")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user_data");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // if (user) {
  //   return navigate("/user");
  // }

  return (
    <div>
      <div className="main-div">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            axios
              .post("http://localhost:8000/login/", values)
              .then((res) => {
                // localStorage.setItem("user_data", JSON.stringify({...user_data, key:res.data.key, username: res.data.username, id: res.data.id}));
                localStorage.setItem("user_data", JSON.stringify(res.data));
                navigate("/user");
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
            <div className="card card-dark col-md-6 offset-md-3">
              <div className="card-header">
                <h3 className="card-title">Sign In</h3>
              </div>
              <Form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Field
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      // value={user_data ? user_data.email : null}
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
                      type="password"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-dark btn-block">
                    Login
                  </button>
                  <br />
                  <p className="register offset-md-4">
                    Not a Member ?
                    <a href="#">
                      <Link to="/reg">Register</Link>
                    </a>
                  </p>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
