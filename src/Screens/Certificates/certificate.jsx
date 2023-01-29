import React from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import './certificate.css'

function Certificate() {
    return (
<div className="content-wrapper">
        <div className="content">
            <div className="container-fluid">
            <div className="card" >
            <div className="card-header">Select Flow</div>
            <div className="card-body">
                <h6 className="card-title text-dark">Flow Name</h6>
                <p className="card-text">
                    <Dropdown >
                        <Dropdown.Toggle className='drop'>
                            select flow to download formate
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropmenu'>
                            <Dropdown.Item>
                                Farmer Registration
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Internal Inspection
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Lot Creation
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Crop Entry
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </p>
                <Button>Download</Button>
                <button type="button" className="btn btn-dark btn-block"><i className="fa fa-download"></i>Download</button>
            </div>
        </div>

            </div>
        </div>
    </div>
    )
}

export default Certificate
