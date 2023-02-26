import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {
  const [user, setuser] = useState({
    fields: {
      email: "",
      password: "",
      confirm_password: "",
      username: "",
    },
    errors: {
      email: "",
      password: "",
      confirm_password: "",
      username: "",
    },
  });
  const navigate = useNavigate();
  
  const validate = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "Email is required";
        }
      case "password":
        if (!value) {
          return "Password is required"
        }
      case "confirm_password":
        if (!value) {
          return "Confirm Password is required";
        }
      case "username":
        if (!value) {
          return "Username is required";
        }
    }
  }


  const handleChange = (e) => {
    var { name, value } = e.target;
    console.log(name, value);
    // setuser((prevState) => ({ ...prevState, [name]: value }));
    setuser({
      errors: {
        ...user.errors, [name]:validate(name, value)
      },
      fields: {
        ...user.fields, [name]:value
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger
    
    // const [fields, errors] = user;
    // console.log(fields)
    
    console.log("-----user----", user);
    // Object.keys(fields)
    // if (type === "register") {
    //   axios.post("http://localhost:8000/user/", user).then((res) => {
    //     console.log(res);
    //     localStorage.setItem("user_data", JSON.stringify(res.data));
    //     navigate("/user");
    //   });
    // } else {
    //   axios.post("http://localhost:8000/login/", user).then((res) => {
    //     console.log(res);
    //     localStorage.setItem("user_data", JSON.stringify(res.data));
    //     navigate("/user");
    //   });
    // }
  };

  return (
    <div className="main-div">
      <div className="card card-info col-md-6 offset-md-3">
        <div className="card-header">
          <h3 className="card-title">Sign Up </h3>
        </div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Username
              </label>
              <div className="col-sm-10">
                <input
                  // required
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  id="useranme"
                  placeholder="username"
                  name={"username"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  // required
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  name={"email"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  // required
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  name={"password"}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
                name={"confirm_password"}
                onChange={handleChange}
              />
            </div>
            </div> */}
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Remember me
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-info">
              Sign Up
            </button>
            <button type="submit" className="btn btn-info float-right">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
