import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import './tracenet.css'
import axios from 'axios';

function Tracenet() {

  const [inputs, setInputs] = useState({});
  const [options, setOptions] = useState({});
  const [item, setItem] = useState({ kindOfStand: "" });
  // console.log(item)
  const { kindOfStand } = item;
  const [validated, setValidated] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [optionTwo, setOptionTwo] = useState(false);
  const [option, setOption] = useState({});

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


//   useEffect(() => {
//     axios.get("http://localhost:8000/form/")
//     .then((res) => 
//     console.log(res.status_code)
//     )
// }, [])

  const handleChange = (event) => {
    // event.persist();

    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({ ...values, [name]: value }))
    setOptions(values => ({ ...values, [name]: value }))
    // setItem(prevState => ({ ...prevState, [name]: value }));
    setOption(value);
    radioView(event.target.values)
    
  };

  const radioSelector=(e)=>{
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    let obj = {
      [name]: value
    }
    setOption(values => ({ ...values, [name]: obj })) 
    console.log(options);
  }


  const radioView= (list)=>{
    var template =    
      obj.map(data => {
        console.log(data.option == list);
        if (data.option === option) {
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
                              name = {d[0]}
                              aria-label='radio 1'
                              type="radio"
                              label={n}
                              checked={kindOfStand === { n }} 
                              onChange={radioSelector}
                              value={n}
                              key={n}
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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log("-----inouts----",inputs)
    console.log("-----options---", options);
    console.log("-----option---", option);
    console.log("----item-------", item);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(item)

    setValidated(true);

    // axios.post("http://localhost:8000/tracenet/", inputs)
    // .then((res) => {
    //   console.log("ppost done", res)
    // })
    // .catch(err => console.log(err))
  }



  // // Radio button validation


  // const handleChange = e => {
  //   e.persist();
  //   console.log(e.target.value);

  //   setItem(prevState => ({
  //     ...prevState,
  //     kindOfStand: e.target.value
  //   }));
  // };

  // const handleSubmits = e => {
  //   e.preventDefault();
  //   alert(`${kindOfStand}`);
  // };


  // // form validation
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
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
                        onChange={handleChange}
                        value={inputs.username || ""}
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
                      value={inputs.password || ""}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Incorrect Password</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom02">
                    <Form.Label>Flow</Form.Label><br></br>
                    <Form.Select aria-label="Default select example" size='lg' className='selectflow' name='flow' value={options.flow || ""} onChange={handleChange}>
                      <option>select Flow</option>
                      <option value="Farmer Registration">Farmer Registration</option>
                      <option value="Internal Inspection">Internal Inspection</option>
                      <option value="Lot Creation">Lot Creation</option>
                      <option value="Crop Entry">Crop Entry</option>
                      <option value="Harvesting">Harvesting</option>
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
                      value={inputs.file || ""}
                      onChange={handleChange}
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

export default Tracenet













// {
//   obj.map(data => {

//       Object.entries(data).map((val1) => {

//           Object.values(val1).map(val2 => {

//               if (typeof (val2) === "object") {

//                   Object.entries(val2).map(val3 => {
//                       if (typeof (val3[1]) === "object") {
//                           console.log(val3[1], val3[0])
//                           Object.entries(val3[1]).map(d => {
//                               console.log(d[0])
//                               return (
//                                   <>
//                                   <Form.Label>{d}</Form.Label>
//                                   </>
//                               )
//                           })
//                       }

//                   })

//               }

//           })
//       })
//   })
// }