import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import './tracenetForm.css'
import axios from 'axios';
import Navigation from '../../Components/navigation/navigation';
import {useLocation} from 'react-router-dom';
// import { Link } from 'react-router-dom';

function TracenetForm(state) {
  
  const location = useLocation();
  const [inputs, setInput] = useState({
    "username": location.state ? location.state.tracenet_username : null,
    "password": location.state ? location.state.tracenet_password : null,
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
        "Select_Scope_type": {
          "mid_year": "Home Page Internal Inspection",
          "scope_renewal": "Scope Renewal"
        },
        "Select_Scope": {
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
          "old_ICS": "Renewal Crop Entry",
          "new_ICS": "New ICS Crop Entry",
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
   
    
    
  //   axios.post("http://localhost:8000/tracenet/", data, 
  //   {
  //     headers : {'Content-Type': 'multipart/form-data'}
  // }
  //   )
  //     .then((res) =>
  //       console.log(res.status_code)
  //     )
  //     .catch((error) => {
  //       console.log(error)
  //     })


  const data = {}
  data.username = inputs.username
  data.password = inputs.password
  data.flow = inputs.flow
  data.options = inputs.radio_selection
  console.log(data.options)
  const formData = new FormData();
  formData.append("file", inputs.file)
  
 
  console.log(typeof(data))
  formData.append("data", JSON.stringify(data))
  // formData.append("data")
  console.log(formData)
  axios.post(
    "http://localhost:8000/tracenet/", formData,
    {
          headers : {'Content-Type': 'multipart/form-data'}
      }
    
  )
  .then((res) =>
        console.log(res.status_code)
      )
  }

  const radioSelector = (e) => {

    const name = e.target.id
    const key = e.target.name;
    const value = e.target.value;
    console.log(name, key, value)
    // const item = {
    //   [name]: value
    // }
    // const item = {}
    inputs.radio_selection[key] = name
  //   setRadioOption({
  //     [key]: name
  // })
    // setRadioOption({...prevState , [key]:name})
    console.log(inputs)
  }

  // useEffect(() => {
  //   if (radioOption) {
  //     inputs.radio_selection.push(radioOption);
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
        
        <div className="container-fluid">
          <div className="card" >
            <div className="card-header">Sign In using Tracenet credentials</div>
            <div className="card-body">
              {/* {console.log(location.state.tracenet_username)} */}
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
                      value={location.state ? location.state.tracenet_username : null}
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
                      type="password"
                      name="password"
                      placeholder="****"
                      value={location.state ? location.state.tracenet_password : null}
                      onChange={inputHandler}
                    />
                    <Form.Control.Feedback type="invalid">Incorrect Password</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom02">
                    <Form.Label>Flow</Form.Label><br></br>
                    <Form.Select aria-label="Default select example" size='lg' className='selectflow' name='flow' onChange={inputHandler}>
                      <option>select Flow</option>
                      <option value="farmer_registration">Farmer Registration</option>
                      <option value="crop_entry">Add Products</option>
                      <option value="harvesting">Actual Yield Updation</option>
                      <option value="internal_inspection">Internal Inspection</option>
                      <option value="lot_creation">Lot Creation</option>
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
  )
}

export default TracenetForm













