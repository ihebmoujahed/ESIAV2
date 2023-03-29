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
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

// reactstrap components
import {
  Button,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Select,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios"
function Tables() {
  const [FirstName, setFirstName] = useState("");
  const [date, setdate] = useState([]);
  const [Card_ID, setCard_ID] = useState("");
  const [price, setPrice] = useState("");
  const [numero_payment, setnumero_payment] = useState("");
  const [leveleducation, setleveleducation] = useState("");
  const [student, setstudent] = useState([]);
  const [Month, setMonth] = useState("");
  const [userpay, setuserpay] = useState([])

  const [studentpay, setstudentpay] = useState([]);

  const [users, setUsers] = useState([])

  const addpay = () => {
    axios.post("http://localhost:3001/api/items/Payment", {
      student: student.first_name,
      dbt: date,
      price: price,
      numero_payment: numero_payment,
      id_User: student.id_User,
      month: Month

    }).then((response) => {
      // console.log(response);
    }).catch((err) => {
      console.log(err);
    })

  }

  const pass = () => {
    axios.put("http://localhost:3001/api/items/updateAje1").then((response) => {
      console.log(response);
    })
  }
  useEffect(() => {
    axios.get(`http://localhost:3001/api/items/selectuserpay/${student.id_User}`).then((response) => {
      // console.log(response.data)
      setstudentpay(response.data)
      // console.log(studentpay)
    })

    axios.get("http://localhost:3001/api/items/selectAJE1").then((response) => {
      setUsers(response.data)

    }, ["http://localhost:3001/api/items/selectAJE1"])
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
                <CardTitle tag="h4">Student  Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table id="my_tt" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                  <h3 style={{ border: '1px solid black', padding: '5px', fontSize: "23px", width: "168%", backgroundColor: "yellow" }}>قائمة اسمية لافواج المرسمين في التكوين الخاص</h3>
                  <tbody>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>الجنوب للاعلامية و الادارة</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>اسم هيكل التكوين الخاص</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>8201393</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>رفم التسجيل</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}><span style={{ color: "blue" }}></span>مدنين</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>الولاية</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>منشط روضة اطفال</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>تسمية الاختصاص</span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>الثالث</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>(*)مستوى شهادة التكوين المنظر </span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>1</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>(*)رمز الفوج المهني </span></td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>01/10/2022</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }} ><span style={{ color: "blue" }}>انطلاق التكوين</span></td>


                    </tr>
                    <tr>
                      <td style={{ padding: '5px', fontSize: "23px" }} >30/07/2024</td>

                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }} ><span style={{ color: "blue" }}>ختم التكوين</span></td>
                    </tr>

                    <tr>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>الثانية</td>
                      <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px", backgroundColor: "yellow" }}><span style={{ color: "blue" }}>(*)السنة التكوينية</span></td>
                    </tr>
                  </tbody>

                </Table>
              </CardBody>
              <CardBody>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  نجاح
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">نجاح</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                    هل انت متاكد من نجاح التلاميذ
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                        <button type="button" class="btn btn-primary" onClick={pass}>نجاح</button>
                      </div>
                    </div>
                  </div>
                </div>
                <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                  <thead className="text-primary">
                    <tr>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }} className="text-right">الخلاص</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }} className="text-right">شهادةحضور</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }} className="text-right">المستوى الدراسي او التكويني</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>رقم بطاقة التعريف الوطنية</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>تاريخ الولادة</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>الجنس</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>الاسم و اللقب</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>ع/ر</th>
                    </tr>
                  </thead>
                  {users.map((elem) => {
                    return (
                      <tbody>
                        <tr>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>
                            <a style={{ color: "red", fontFamily: "gras" }} href="" type="button" data-toggle="modal" data-target="#exampleModalLong" onClick={(id_User) =>
                              axios.get(`http://localhost:3001/api/items/selectid/${elem.id_User}`).then((response) => {
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
                                            <label style={{ color: "black" }}>الاسم و اللقب</label>
                                            <Input
                                              onChange={(e) => setFirstName(e.target.value)}
                                              name="FirstName"
                                              placeholder="Prenom"
                                              type="text"
                                              defaultValue={student.first_name + " " + student.last_name}
                                            />
                                          </FormGroup>
                                        </Col>

                                      </Row>

                                      <Row>

                                        <Col className="pr-1" md="4">
                                          <FormGroup>
                                            <label style={{ color: "black" }}>القسم</label>
                                            <Input type="select" onChange={(e) => setMonth(e.target.value)}>
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
                                              <option>الترسيم</option>
                                              <option>معلوم الامتحان</option>

                                            </Input>
                                          </FormGroup>
                                        </Col>

                                      </Row>
                                      <Row>
                                        <Col md="12">
                                          <FormGroup>
                                            <label style={{ color: "black" }}>الثمن</label>
                                            <Input
                                              type="number" name="niveau éducation" onChange={(e) => setPrice(e.target.value)}
                                            />
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md="12">
                                          <FormGroup>
                                            <label style={{ color: "black" }}>رقم الدفع</label>
                                            <Input
                                              type="number" name="niveau éducation" onChange={(e) => setnumero_payment(e.target.value)}
                                            />
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md="12">
                                          <FormGroup>
                                            <label style={{ color: "black" }}>تاريخ الدفع</label>
                                            <Input
                                              type="date" name="Date de Payment" onChange={(e) => setdate(e.target.value)}
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
                                            ادفغ
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


                          </td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>
                            <a style={{ color: "red", fontFamily: "gras" }} href="http://localhost:3000/admin/maps" type="button" onClick={(id_User) =>
                              axios.get(`http://localhost:3001/api/items/selectid/${elem.id_User}`).then((response) => {
                                console.log(response.data)
                                var haya = response.data
                                // console.log(usersinfo)
                                localStorage.setItem("std", JSON.stringify(haya))
                              })
                            }>
                              شهادة حضور
                            </a>



                          </td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }} className="text-right">{elem.leveleducation}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>{elem.card_id}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>{elem.birthday}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }} className="text-right">{elem.gender}</td>

                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}><a style={{ color: "black" }} href="http://localhost:3000/admin/user-page" onClick={(id_User) =>
                            axios.get(`http://localhost:3001/api/items/selectid/${elem.id_User}`).then((response) => {
                              console.log(response.data)
                              var haya = response.data
                              // console.log(usersinfo)
                              localStorage.setItem("std", JSON.stringify(haya))
                            })
                          }
                          >{elem.first_name} {elem.last_name}</a></td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }} className="text-right">{elem.id_User}</td>


                        </tr>
                      </tbody>
                    )
                  })}
                </Table>
                <Table id="my-table" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%', display: "none" }}>
                  <thead className="text-primary">
                    <tr>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }} className="text-right">المستوى الدراسي او التكويني</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>رقم بطاقة التعريف الوطنية</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>تاريخ الولادة</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>الجنس</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>الاسم و اللقب</th>
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }}>ع/ر</th>
                    </tr>
                  </thead>
                  {users.map((elem) => {
                    return (
                      <tbody>
                        <tr>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }} className="text-right">{elem.leveleducation}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>{elem.card_id}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}>{elem.birthday}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }} className="text-right">{elem.gender}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }}
                          >{elem.first_name} {elem.last_name}</td>
                          <td style={{ border: '1px solid black', padding: '5px', fontSize: "23px" }} className="text-right">{elem.id_User}</td>

                        </tr>
                      </tbody>
                    )
                  })}
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">

              <ReactHtmlTableToExcel

                table={['my-table']}
                filename="tables"
                sheet="sheet 1"
                buttonText="Export"
              />

            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
