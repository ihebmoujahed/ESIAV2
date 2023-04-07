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
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [date, setdate] = useState("");

  const [student, setstudent] = useState([]);
  const [studentpay, setstudentpay] = useState([]);
  const [month, setmonth] = useState("");
  const [newprice, setnewprice] = useState("");
  const [newnumero_price, setnewnumero_price] = useState("");
  const updateuser = (id_User) => {
    var obj = {}
    if (Lastname === "") {
      var obj = {
        first_name: Firstname,
        last_name: student.last_name,
        birthday: student.birthday
      }

    } else if (Firstname === "") {
      var obj = {
        first_name: student.first_name,
        last_name: Lastname,
        birthday: student.birthday

      }

    }
    else if (date === "") {
      var obj = {
        first_name: student.first_name,
        birthday: date,
        last_name: student.last_name,

      }

    }
    else {
      var obj = {
        first_name: Firstname,
        last_name: Lastname,
        birthday: date

      }
    }

    console.log(obj)
    axios.put(`http://localhost:3001/api/items/updateuser/${student.id_User}`, obj).then((response) => {
      console.log(response)
    })
  }

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
      // console.log(studentpay)
    })
    get()
  }, [`http://localhost:3001/api/items/selectuserpay/${student.id_User}`])


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
                  <h4 >{student.first_name + " " + student.last_name}</h4>
                </div>

              </CardBody>

            </Card>
            <Card>
              <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                <thead className="text-primary">
                  <tr>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "20px" }}>تعديل</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "20px" }}>رقم الوصل</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "20px" }}>الشهر</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "20px" }}>تاريخ الدفع</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "20px" }}>المبلغ</th>
                    <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px', fontSize: "20px" }}>الاسم و اللقب</th>
                  </tr>
                </thead>
                {studentpay.map((elem) => {
                  return (
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid black', padding: '5px', fontSize: "18px" }}><a  onClick={(id_Payment) => {
                          var dd = {}

                          if (month === "") {
                            var dd = {
                              month: elem.month,
                              price: newprice,
                              numero_payment: elem.numero_payment
                            }

                          } else if (newprice === "") {
                            var dd = {
                              month: month,
                              price: elem.price,
                              numero_payment: elem.numero_payment
                              }

                          }
                          else if (newnumero_price === "") {
                            var dd = {
                              month: elem.month,
                              price: elem.price,
                              numero_payment: newnumero_price

                            }

                          }
                          else {
                            var dd = {
                              first_name: Firstname,
                              last_name: Lastname,
                              birthday: date

                            }
                          }
                          console.log(dd);

                          axios.put(`http://localhost:3001/api/items/updatePayment/${elem.id_Payment}`,dd).then((response) => {
                            console.log(response)
                          })

                        }}>تعديل</a></td>
                        <td style={{ border: '1px solid black', padding: '5px', fontSize: "18px" }}>
                          <input type="numero" defaultValue={elem.numero_payment} onChange={(e) => setnewnumero_price(e.target.value)} style={{ width: "75px" }} />
                        </td>
                        <td style={{ border: '1px solid black', padding: '5px', fontSize: "18px" }}>
                          <select onChange={(e) => setmonth(e.target.value)}>
                            <option selected disabled hidden>{elem.month}</option>
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
                          </select>

                        </td>
                        <td style={{ border: '1px solid black', padding: '5px', fontSize: "18px" }}>{elem.dbt}</td>
                        <td style={{ border: '1px solid black', padding: '5px', fontSize: "18px" }}>
                          <input type="number" defaultValue={elem.price} style={{ width: "95px" }} onChange={(e) => setnewprice(e.target.value)} /></td>
                        <td style={{ border: '1px solid black', padding: '5px', fontSize: "18px" }}><a>{elem.first_name} {elem.last_name}</a></td>

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
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label style={{ fontSize: "23px", color: "black" }}>الاسم</label>
                        <Input onChange={(e) => setFirstname(e.target.value)}
                          defaultValue={student.first_name}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label style={{ fontSize: "23px", color: "black" }}>اللقب</label>
                        <Input onChange={(e) => setLastname(e.target.value)}
                          defaultValue={student.last_name}
                          type="text"

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label style={{ fontSize: "23px", color: "black" }}>تاريخ الولادة</label>
                        <Input
                          defaultValue={student.birthday}
                          placeholder="Home Address"
                          type="date"
                          onChange={(e) => setdate(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "23px", color: "black" }}>مكان الولادة</label>
                        <Input
                          defaultValue="Tunis"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "23px", color: "black" }}>البلاد</label>
                        <Input
                          defaultValue={student.place}
                          placeholder="Country"
                          type="text"
                          style={{ fontFamily: "gras" }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label style={{ fontSize: "23px", color: "black" }}>بطاقة تعريف الوطنية</label>
                        <Input placeholder="ZIP Code" type="number" defaultValue={student.card_id} />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={updateuser}
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
