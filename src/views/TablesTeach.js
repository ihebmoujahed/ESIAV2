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
import User from "./User";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  CardFooter,
  FormGroup,
  Input,

} from "reactstrap";
import { useState, useEffect } from "react";
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

import axios from "axios"
function Tables() {
  const [student, setstudent] = useState([]);
  const [Age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [Month, setMonth] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [studentpay, setstudentpay] = useState([]);
  const [numero_payment, setnumero_payment] = useState("");

  const addpay = () => {
    axios.post("http://localhost:3001/api/items/PaymentTeacher", {
      student: student.first_name,
      dbt: Age,
      price: student.Payment * price,
      // image_user:file.name
      id_Teacher: student.id_Teacher,
      month: Month,
      numero_payment: numero_payment

    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })

  }


  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/items/selectAllTeacher").then((response) => {
      setUsers(response.data)

    }, ["http://localhost:3001/api/items/selectAllTeacher"])
    axios.get(`http://localhost:3001/api/items/selectteacherpay/${student.id_Teacher}`).then((response) => {
      // console.log(response.data)
      setstudentpay(response.data)
      // console.log(studentpay)
    })


    const items = JSON.parse(localStorage.getItem("std"))
    if (items) {
      var s = items[0]
      // console.log(s)
      setstudent(s)
    }

  })
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">قائمة المعلمين</CardTitle>
              </CardHeader>
              <CardBody>
                <Table id="my-table" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                  <thead className="text-primary">
                    <tr>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "23px", border: '1px solid black' }} className="text-right">الدفع</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "23px", border: '1px solid black' }} className="text-right">المستوى الدراسي</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "23px", border: '1px solid black' }}>تاريخ الولادة</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "23px", border: '1px solid black' }}>رقم بطاقة التعريف الوطنية</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "23px", border: '1px solid black' }}>اللقب</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "23px", border: '1px solid black' }}>الاسم</th>
                    </tr>
                  </thead>
                  {users.map((elem) => {
                    return (
                      <tbody>
                        <tr>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>
                            <a style={{ color: "red", fontFamily: "gras" }} href="" type="button" data-toggle="modal" data-target="#exampleModalLong" onClick={(id_Teacher) =>
                              axios.get(`http://localhost:3001/api/items/selectidTeacher/${elem.id_Teacher}`).then((response) => {
                                console.log(response.data)
                                var haya = response.data
                                // console.log(usersinfo)
                                localStorage.setItem("std", JSON.stringify(haya))
                              })
                            }>
                              الدفع
                            </a>

                            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <div>
                                      <Row>
                                        <Col className="pr-1" md="6">
                                          <FormGroup>
                                            <label style={{color:"black"}}>الاسم و اللقب</label>
                                            <Input style={{fontSize:"25px",color:"black"}}
                                              onChange={(e) => setFirstName(e.target.value)}
                                              name="FirstName"
                                              placeholder="Prenom"
                                              type="text"
                                              defaultValue={student.first_name+" "+student.last_name}
                                            />
                                          </FormGroup>
                                        </Col>

                                      </Row>

                                      <Row>

                                        <Col className="pr-1" md="4">
                                          <FormGroup>
                                            <label style={{color:"black"}}>الشهر</label>
                                            <Input style={{fontSize:"15px",color:"black"}} type="select" onChange={(e) => setMonth(e.target.value)}>
                                              <option>Select Month</option>
                                              <option>الشهر 1</option>
                                              <option>الشهر 2</option>
                                              <option>الشهر 3</option>
                                              <option>الشهر 4</option>
                                              <option>الشهر 5</option>
                                              <option>الشهر 6</option>
                                              <option>الشهر 7</option>
                                              <option>الشهر 8</option>
                                              <option>الشهر 9</option>
                                              <option>الشهر 10</option>
                                              <option>الشهر 11</option>
                                              <option>الشهر 12</option>
                                          

                                            </Input>
                                          </FormGroup>
                                        </Col>

                                      </Row>
                                      <Row>
                                        <Col md="12">
                                          <FormGroup>
                                            <label style={{color:"black"}}>عدد الساعات</label>
                                            <Input style={{fontSize:"25px",color:"black"}}
                                              type="number" name="niveau éducation" onChange={(e) => setPrice(e.target.value)}
                                            />
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md="12">
                                          <FormGroup>
                                            <label style={{color:"black"}}>تاريخ الدفع</label>
                                            <Input style={{fontSize:"25px",color:"black"}}
                                              type="date" name="Date de Payment" onChange={(e) => setAge(e.target.value)}
                                            />
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                      <Row>

                                      </Row>
                                      <Row>
                                        <div className="update ml-auto mr-auto">
                                          <Button
                                            className="btn-round"
                                            color="primary"
                                            onClick={addpay}
                                          >
                                            دفع
                                          </Button>
                                        </div>
                                      </Row>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <div>
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
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </td>                          <td className="text-right" style={{ border: '1px solid black', padding: '5px', fontSize: "20px" }}>{elem.Etude}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "20px" }}>{elem.birthday}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "20px" }}>{elem.card_id}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "20px" }}>{elem.last_name}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "20px" }}><a href="http://localhost:3000/admin/user-page" onClick={(id_Teacher) =>
                            axios.get(`http://localhost:3001/api/items/selectidTeacher/${elem.id_Teacher}`).then((response) => {
                              console.log(response.data)
                              var haya = response.data
                              // console.log(usersinfo)
                              localStorage.setItem("std", JSON.stringify(haya))
                            })
                          }>{elem.first_name}</a></td>
                        </tr>
                      </tbody>
                    )
                  })}

                </Table>
                <ReactHtmlTableToExcel

                  table="my-table"
                  filename="table"
                  sheet="sheet 1"
                  buttonText="Export"
                />
              </CardBody>


            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Tables;
