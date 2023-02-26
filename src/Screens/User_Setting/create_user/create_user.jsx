import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

function Create_user() {
  const errors = [];
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  const initialValues = {
    tracenet_username: "",
    tracenet_password: "",
    ics_name: "",
    user: user_data.id,
  };
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    tracenet_username: Yup.string().required("*Username is required"),
    tracenet_password: Yup.string().required("*Password is required"),
    ics_name: Yup.string().required("*ics name is required"),
  });

  return (
    <div className="content-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:8000/tracenet_user/", values, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${user_data.key}`,
              },
            })
            .then((res) => {
              localStorage.setItem(
                "user_data",
                JSON.stringify({ ...user_data, tracenet_data: res.data })
              );
              navigate("/user-detail");
            })
            .catch((err) => {
              Object.values(err.response.data).map((data) => {
                errors.push(data);
              });
              alert(errors);
            });

          resetForm(initialValues);
        }}
      >
        {({ errors, touched }) => (
          <div className="user-card col-md-6 offset-md-3">
            <div className="card card-dark">
              <div className="card-header">
                <h3 className="card-title">Create Tracenet User</h3>
              </div>
              <Form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputTracentUser">
                      ICS Name
                    </label>
                    <Field
                      name="ics_name"
                      className="form-control"
                      placeholder="Enter Ics Name"
                    />
                    {errors.ics_name && touched.ics_name ? (
                      <div>{errors.ics_name}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputTracentUser">
                      Tracenet Username
                    </label>
                    <Field
                      name="tracenet_username"
                      className="form-control"
                      placeholder="Enter Username"
                    />
                    {errors.tracenet_username && touched.tracenet_username ? (
                      <div>{errors.tracenet_username}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputTracenetPassword1">
                      Tracenet Password
                    </label>
                    <Field
                      name="tracenet_password"
                      className="form-control"
                      placeholder="Password"
                      type="password"
                    />
                    {errors.tracenet_password && touched.tracenet_password ? (
                      <div>{errors.tracenet_password}</div>
                    ) : null}
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-block btn-dark">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Create_user;
