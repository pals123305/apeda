import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import axios from 'axios';



function Demo() {

    const [options, setOptions] = useState({});
    const [option, setOption] = useState('');
    const obj = [
        {
            "option": "Internal Inspection",
            "nested_option": [{
                "Select_Scope": {
                    "mid_year": "Mid Year",
                    "scope_renewal": "Scope Renewal"
                },
                "Select_Year": {
                    "Current": "Current",
                    "Previous": "Previous"
                }

            }]
        },
        {
            "option": "Harvesting",
            "nested_option": [{
                "Select_Scope": {
                    "current": "Current",
                    "previous": "Previous"
                },
                "Select_Season": {
                    "kharif": "Kharif",
                    "rabi": "Rabi",
                    "zaid": "Zaid",
                    "perennial": "Perennial"
                },
                "Farm_Type": {
                    "single_farm": "Single Farm",
                    "multi_farm": "Multi_Farm"
                }
            }]
        },
        {
            "option": "Lot Creation",
            "nested_option": [{
                "Select_Scope": {
                    "current": "Current",
                    "previous": "Previous"
                },
                "Organic_Status": {
                    "organic": "Organic",
                    "2nd year conversion": "2nd Year Conversion",
                    "1st year conversion": "1st Year Conversion",
                    "3rd year conversion": "3rd Year Conversion",
                    "2nd year conversion to organic": "2nd Year Conversion to Organic",
                    "3rd year conversion to organic": "3rd Year Conversion to Organic"
                }
            }]

        },
        {
            "option": "Crop Entry",
            "nested_option": [{
                "select_Season": {
                    "kharif": "Kharif",
                    "rabi": "Rabi",
                    "zaid": "Zaid",
                    "perennial": "Perennial",
                    "post harvest activities": "Post Harvest Activities"
                },
                "Select_Scope": {
                    "old_ICS": "Old ICS",
                    "new_ICS": "New ICS",
                    "amendment": "Amendment"
                }
            }]
        }
    ]
    const handleChange = (event) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        // console.log(value)
        setOptions(values => ({ ...values, [name]: value }))
        setOption(value)
    };


    const handleSubmit = (event) => {
        event.preventDefault();
    }





    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => 
        console.log(res)
        )
    }, [])

    return (
        <div className='content-wrapper'>


        </div>
    )























    {/* <Form.Group as={Col} md="8" controlId="validationCustom02">
                <Form.Label>Flow</Form.Label><br></br>
                <Form.Select aria-label="Default select example" size='lg' className='selectflow' name='flow' value={options.flow || ""} onChange={handleChange}>
                    <option>select Flow</option>
                    <option value="Farmer Registration">Farmer Registration</option>
                    <option value="Internal Inspection">Internal Inspection</option>
                    <option value="Lot Creation">Lot Creation</option>
                    <option value="Crop Entry">Crop Entry</option>
                    <option value="Harvesting">Harvesting</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom02">
                {
                    obj.map(data => {
                        if (data.option === option) {
                            return (data.nested_option.map((n_val) => {
                                return (
                                    <>{Object.entries(n_val).map(d => {
                                        return (
                                            <>
                                                <Form.Label>{d[0]}</Form.Label><br /> */}
    {/* <h3>
                                                    {d[0]}
                                                </h3> */}
    {/* { */ }
    // Object.values(d[1]).map(n => {
    //     return (
    //         <> 
    //         <Form.Check
    //             inline
    //             type="radio"
    //             label={n}
    // checked={kindOfStand === { n }}
    //     onChange={handleChange}
    //     value={n}
    // /><br />
    // </>
    // <p>{n}</ p>
    // )
    //                                         })}
    //                                 </>
    //                             )
    //                         })}
    //                         </>
    //                     )
    //                 })
    //                 )
    //             }
    //         })
    //     }
    // </Form.Group>

}

export default Demo
