import React from 'react'
import { Table } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Upload() {
    return (
        <div className="content-wrapper">
            <div className="content">


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Flow Type</th>
                            <th>Details</th>
                            <th>Excel File Name</th>
                            <th>Ics User Name</th>
                            <th>Status</th>
                            <th>Start Time</th>
                            <th>Progress</th>
                            <th>Elapsed Time</th>
                            <th>Finished Time</th>
                            <th>Request For Canellation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>183</td>
                            <td>Farmer Registration</td>
                            <td>Crop Type: Kharrif</td>
                            <td>Farmer_Registration.xlsx</td>
                            <td>ODMKXL</td>
                            <td><span className="tag tag-success">Running</span></td>
                            <td>23/01/2023 12:48:38 PM</td>
                            <td>
                                <ProgressBar animated now={45} />
                            </td>
                            <td>20 min</td>
                            <td>NA</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>183</td>
                            <td>Farmer Registration</td>
                            <td>Crop Type: Kharrif</td>
                            <td>Farmer_Registration.xlsx</td>
                            <td>ODMKXL</td>
                            <td><span className="tag tag-success">Running</span></td>
                            <td>23/01/2023 12:48:38 PM</td>
                            <td>
                                <ProgressBar animated now={80} />
                            </td>
                            <td>20 min</td>
                            <td>NA</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>183</td>
                            <td>Farmer Registration</td>
                            <td>Crop Type: Kharrif</td>
                            <td>Farmer_Registration.xlsx</td>
                            <td>ODMKXL</td>
                            <td><span className="tag tag-success">Running</span></td>
                            <td>23/01/2023 12:48:38 PM</td>
                            <td>
                                <ProgressBar animated now={35} />
                            </td>
                            <td>20 min</td>
                            <td>NA</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>




            </div>
        </div>
    )
}

export default Upload
