import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import './tracenetForm.css'
import axios from 'axios';

function TracenetForm() {

  const [inputs, setInput] = useState({
    "username": '',
    "password": '',
    "flow": '',
    "file": '',
    "radio_selection": {}
  });
  const [validated, setValidated] = useState(false);
  const [isCheckin, setIschecked] = useState(false);
  const [radioOption, setRadioOption] = useState();

  const inputHandler = (e) => {
    var { name, value } = e.target;
    if (e.target.files) {
      setInput((prevState) => ({
        ...prevState,
        [name]: e.target.files[0]
      }));
      // console.log(inputs)
    }
    else {
      setInput((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }

  };

  const obj = [
    {
      "option": "internal_inspection",
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
      "option": "harvesting",
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
      "option": "lot_creation",
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
        },
        "Harvest_Year" : ['2022', '2021', '2020', '2019']
      }]

    },
    {
      "option": "crop_entry",
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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log("-----inouts----", inputs)

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    axios.post("http://localhost:8000/tracenet/", inputs
    )
      .then((res) =>
        console.log(res.status_code)
      )
      .catch((error) => {
        console.log(error)
      })
  }

  const radioSelector = (e) => {

    const name = e.target.id
    const key = e.target.name;
    const value = e.target.value;
    // const item = {
    //   [name]: value
    // }
    const item = {}
    inputs.radio_selection[key] = name
    
    // setRadioOption(radioOption)
    console.log(inputs)
  }

  // useEffect(() => {
  //   if (radioOption) {
  //     inputs.radio_selection.data = radioOption;
  //     console.log(inputs)
  //   }
  // }, [radioOption]);

  const radioView = (list) => {
    console.log(inputs.flow)
    let template =
      obj.map(data => {
        if (data.option === inputs.flow) {
          return (data.nested_option.map((n_val) => {
            return (
              <div key={data.option}>{Object.entries(n_val).map(d => {
                return (
                  <>
                    <Form.Label key={d[0]}>{d[0]}</Form.Label><br />
                    {
                      Object.values(d[1]).map(n => {
                        return (
                          <>
                            <Form.Check
                              inline
                              name={d[0]}
                              id={n}
                              aria-label='radio 1'
                              type="radio"
                              label={n}
                              checked={isCheckin ? true : isCheckin[n]}
                              onChange={radioSelector}
                            /><br />
                          </>
                        )
                      })}
                  </>
                )
              })}
              </ div>
            )
          })
          )
        }
      })
    return template
  }

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="container-fluid">
          <div className="card" >
            <div className="card-header">Sign In using Tracenet credentials</div>
            <div className="card-body">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        name="username"
                        onChange={inputHandler}
                      // value={inputs.userrname}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom01">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="password"
                      placeholder="****"
                      // value={inputs.password || ""}
                      onChange={inputHandler}
                    />
                    <Form.Control.Feedback type="invalid">Incorrect Password</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom02">
                    <Form.Label>Flow</Form.Label><br></br>
                    <Form.Select aria-label="Default select example" size='lg' className='selectflow' name='flow' onChange={inputHandler}>
                      <option>select Flow</option>
                      <option value="farmer_registration">Farmer Registration</option>
                      <option value="internal_inspection">Internal Inspection</option>
                      <option value="lot_creation">Lot Creation</option>
                      <option value="crop_entry">Crop Entry</option>
                      <option value="harvesting">Harvesting</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                  </Form.Group>

                </Row>
                <Form.Group className="mb-3">

                  <Form.Group as={Col} md="12" controlId="validationCustom02" >
                    {
                      radioView()
                    }
                  </Form.Group>

                  <Form.Group as={Col} md="8" controlId="validationCustom03" >
                    <Form.Label>Select File</Form.Label><br></br>
                    <Form.Control
                      required
                      type="file"
                      name="file"
                      // value={inputs.file || ""}
                      onChange={inputHandler}
                    />
                  </Form.Group>

                  <Form.Check
                    required
                    label="I agree that this tool will fill the captcha and data on Tracenet website on my behalf."
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TracenetForm













