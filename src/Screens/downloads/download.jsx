import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./download.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import AWS from "aws-sdk";

function Download() {
  const [options, setOptions] = useState({});
  const [post, setPosts] = useState([]);
  const [template, setTemplate] = useState("Choose Template");

  AWS.config.update({
    accessKeyId: "AKIAURVWDCTDRY2TUYSM",
    secretAccessKey: "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",
  });

  const handleClick = (e) => {
    e.preventDefault();
  };
  // const client = axios.create({
  //     baseURL: "https://localhost:8000/file/",
  //     // headers: 'Content-Disposition= 'attachment; filename=%s' % filename
  // });

  const handleChange = (event) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    console.log(value, options);
    setOptions((values) => ({ ...values, [name]: value }));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const s3 = new AWS.S3();

    const params = {
      Bucket: "test-glue-ge",
      Key: "excel_files/farmer_registration.xlsx",
    };
    function downloadBlob(blob, name = "farmer_registration.xlsx") {
      // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
      const blobUrl = URL.createObjectURL(blob);
      console.log(blobUrl)
      // Create a link element
      const link = document.createElement("a");
      // Set link's href to point to the Blob URL
      link.href = blobUrl;
      link.download = name;
      // Append link to the body
      document.body.appendChild(link);
      // Dispatch click event on the link
      // This is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      // Remove link from body
      document.body.removeChild(link);
    }
    s3.getObject(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data.Body)
        let csvBlob = new Blob([Buffer.from(data.Body)], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ,
        });
        downloadBlob(csvBlob, "farmer_registration.xlsx");
      }
    });
  };

  // useEffect(() => {
  //     client.get().then((response) => {
  //        setPosts(response.data);
  //        console.log(post)
  //     });
  //  }, []);

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="container-fluid">
          <div className="card col-md-6 ml-auto mr-auto">
            <div className="card-header">Select Flow</div>
            <div className="card-body">
              <h6 className="card-title text-dark">Flow Name</h6>
              <p className="card-text">
                <Form onSubmit={handleDownload}>
                  <Form.Select
                    aria-label="Default select example"
                    size="lg"
                    className="selectflow"
                    name="flow"
                    value={options.flow || ""}
                    onChange={handleChange}
                  >
                    <option>select Flow</option>
                    <option
                      value="Farmer Registration"
                      onSelect={() => setTemplate("Farmer Registration")}
                    >
                      Farmer Registration
                    </option>
                    <option value="Internal Inspection">
                      Internal Inspection
                    </option>
                    <option value="Lot Creation">Lot Creation</option>
                    <option value="Crop Entry">Crop Entry</option>
                  </Form.Select>
                  <button type="submit" className="btn btn-info">
                    Sign Up
                  </button>
                </Form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
