import React, { useState, useEffect } from 'react';
import {Button } from 'react-bootstrap'
import './download.css'
import { Form } from 'react-bootstrap';
import axios from 'axios';



function Download() {
    const [options, setOptions] = useState({});
    const [post, setPosts] = useState([]);
    const client = axios.create({
        baseURL: "https://localhost:8000/file/",
        // headers: 'Content-Disposition= 'attachment; filename=%s' % filename
    });

    const handleChange = (event) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        console.log(value, options)
        setOptions(values => ({ ...values, [name]: value }))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(options);
    }
    useEffect(() => {
        client.get().then((response) => {
           setPosts(response.data);
           console.log(post)
        });
     }, []);

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                    <div className="card col-md-6 ml-auto mr-auto" >
                        <div className="card-header">Select Flow</div>
                        <div className="card-body">
                            <h6 className="card-title text-dark">Flow Name</h6>
                            <p className="card-text">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Select aria-label="Default select example" size='lg' className='selectflow' name='flow' value={options.flow || ""} onChange={handleChange}>
                                        <option>select Flow</option>
                                        <option value="Farmer Registration">Farmer Registration</option>
                                        <option value="Internal Inspection">Internal Inspection</option>
                                        <option value="Lot Creation">Lot Creation</option>
                                        <option value="Crop Entry">Crop Entry</option>
                                    </Form.Select>
                                    <Button className='downloadbtn' variant='dark' type='submit'>Download</Button>
                                </Form>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Download
