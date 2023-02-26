import React, {useEffect, useState} from "react";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css'

function Register() {
    const [user, setuser] = useState({
        'email' : '',
        'password' : '',
        'confirm_password' : '',
        'first_name' : ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        var { name, value } = e.target;
        console.log(name, value)
        setuser((prevState) => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        console.log("-----inouts----", user)
        // navigate('/tracenet', {state:user})
        axios.post(
            "http://localhost:8000/register/", user 
          )
          .then((res) =>
                console.log(navigate('/user', {state:res.data.first_name}))
              )
    }

  return (
    <div className='main-div'>
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
                type="text"
                className="form-control"
                id="useranme"
                placeholder="username"
                name={"first_name"}
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
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
                name={"password"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
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
          </div>
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
            Sign up
          </button>
          <button type="submit" className="btn btn-default float-right">
            Cancel
          </button>
        </div>
      </form>
    </div>

</div>
  );
}

export default Register;
