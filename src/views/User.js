/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from "axios";
// reactstrap components
import {
  Button,
  Table,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { useEffect, useState } from "react";

function UserProfile() {
  const [student, setstudent] = useState([]);
  const [studentpay, setstudentpay] = useState([]);


  const get = () => {
    const items = JSON.parse(localStorage.getItem("std"))
    if (items) {
      var s = items[0]
      // console.log(s)
      setstudent(s)
    }
  }


  useEffect(() => {
    axios.get(`http://localhost:3001/api/items/selectuserpay/${student.id_User}`).then((response) => {
      // console.log(response.data)
      setstudentpay(response.data)
      console.log(studentpay)
    })
    get()
  })

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={student.image_user}
                    />
                    <h5 className="title"></h5>
                  </a>
                  <h4 >{student.first_name + student.last_name}</h4>
                </div>
               
              </CardBody>
             
            </Card>
            <Card>
              <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                <thead className="text-primary">
                  <tr>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px' }}>First Name</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px' }}>Price</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px' }}>Date de Payment</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px' }}>month</th>
                  </tr>
                </thead>
                {studentpay.map((elem) => {
                  return (
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid black', padding: '5px' }}><a>{elem.first_name}</a></td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{elem.price}</td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{elem.dbt}</td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{elem.month}</td>

                      </tr>
                    </tbody>
                  )
                })}
              </Table>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>

                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue={student.first_name}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue={student.first_name}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue={student.last_name}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>birthday</label>
                        <Input
                          defaultValue={student.birthday}
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Tunis"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue={student.place}
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Card id</label>
                        <Input placeholder="ZIP Code" type="number" defaultValue={student.card_id} />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
