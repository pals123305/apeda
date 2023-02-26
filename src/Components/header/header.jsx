import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  
  const user_data = JSON.parse(localStorage.getItem('user_data'));
  const navigate = useNavigate();
  const errors = [];

  const handleClick = (e) => {
    axios.post("http://localhost:8000/logout/", {
      headers : {"Authorization" : `Token ${user_data.key}` }
    })
    .then((res) => {
      localStorage.clear()
      navigate('/login')
    })
    .catch((err) => {
      Object.values(err.response.data).map((error) => {
        errors.push(error);
      });
      alert(errors)
    })
  }
  
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="" className="nav-link">
              <Link to="/" className="link">
                Home
              </Link>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search" />
            </a> */}
            {/* <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </li>

          <li className="nav-item">
            {/* <Link to="/login/" className="link"> */}
              <button type="button"onClick={handleClick}>Logout</button>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
