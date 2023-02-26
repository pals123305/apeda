import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./user_detail.css";
import { Modal, Button, Form } from "react-bootstrap";
import Loader from "../../../Components/loader/loader";

function User_detail() {
  const [user, setUser] = useState([]);
  const [showLoader, setshowLoader] = useState(false);
  const errors = [];
  const navigate = useNavigate();
  const user_data = JSON.parse(localStorage.getItem("user_data"));
  const [isShow, setisShow] = React.useState(false);
  const handleClose = () => setisShow(false);
  const handleShow = () => {
    setisShow(true);
  };

  useEffect(() => {
    setshowLoader(true);
    axios
      .get("http://localhost:8000/tracenet_user/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${user_data.key}`,
        },
      })
      .then((customers) => {
        console.log(customers.data);
        setUser(customers.data);
        localStorage.setItem(
          "tracenet_user_detail",
          JSON.stringify(customers.data)
        );
        setshowLoader(false);
      })
      .catch((err) => {
        Object.values(err.response.data).map((data) => {
          errors.push(data);
        });
        alert(errors);
        setshowLoader(false);
      });
  }, []);

  const handleClickEvent = () => {
    let users = user.map((item, key) => {
      let url = "http://localhost:8000/tracenet_user/" + item.id;
      return (
        <tr>
          <td>{key + 1}</td>
          <td>{item.tracenet_username}</td>
          <td>{item.ics_name}</td>
          <td>{String(item.is_active)}</td>
          <td>{new Date(item.created_at).toISOString().split("T")[0]}</td>
          <td>{new Date(item.updated_at).toISOString().split("T")[0]}</td>
          <td>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default"
                onClick={(e) => {
                  navigate("/tracenet", { state: item });
                }}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-default"
                onClick={(e) => {
                  window.confirm("Are you sure you want to delete ?")
                    ? axios
                        .delete(url, {
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Token ${user_data.key}`,
                          },
                        })
                        .then((res) => {
                          let filterData = user.filter((data, key) => {
                            console.log(item.id, data.id);
                            return item.id != data.id;
                          });
                          setUser(filterData);
                        })
                        .catch((err) => console.log(err))
                    : console.log("false");
                }}
              >
                Delete
              </button>
              {/* <button
                type="button"
                className="btn btn-default"
                onClick={handleShow}
              >
                Update
              </button> */}
              {isShow
                ? console.log(user.filter((data, key) => {
                    return item.id == data.id;
                  }))
                : null}

              <div className="modal show">
                <Modal
                  show={isShow}
                  onHide={handleClose}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Update Tracenet Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                          autoFocus
                          value={item.tracenet_username}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </td>
        </tr>
      );
    });
    return users;
  };

  return (
    <div className="content-wrapper">
      {showLoader ? <Loader /> : null}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Tracenet Users</h3>
          <div className="card-tools">
            <ul className="pagination pagination-sm float-right">
              <li className="page-item">
                <a className="page-link" href="#">
                  «
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  »
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body p-0">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 10 }}>S.no</th>
                <th>Username</th>
                <th className="table_head">Password</th>
                <th>ICS name/Project Name</th>
                <th>Active Status</th>
                <th>Created at</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{handleClickEvent()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User_detail;
