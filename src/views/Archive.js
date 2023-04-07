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
import { useDownloadExcel } from 'react-export-table-to-excel';

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
import { useState, useEffect, useRef } from "react";
import axios from "axios"
function Tables() {
  const tableRef = useRef(null);

  const [newetdue, setnewetdue] = useState("");



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
      alert("Doneee")
    }).catch((err) => {
      console.log(err);
    })

  }
  const pass = () => {
    axios.put("http://localhost:3001/api/items/updateTSIG").then((response) => {
      console.log(response);
    })
  }
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
  })

  useEffect(() => {
    axios.get(`http://localhost:3001/api/items/selectuserpay/${student.id_User}`).then((response) => {
      // console.log(response.data)
      setstudentpay(response.data)
    })

    axios.get("http://localhost:3001/api/items/selectArchive").then((response) => {
      setUsers(response.data)

    }, ["http://localhost:3001/api/items/selectArchive"])
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
                      <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', border: '1px solid black', padding: '5px' }} className="text-right">القسم</th>
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
                            <a style={{ color: "red", fontFamily: "gras" }}  type="button" onClick={(id_User) =>
                              axios.put(`http://localhost:3001/api/items/cancellarchive/${elem.id_User}`,{etude_level:newetdue}).then((response)=>{
                                console.log(response)
                              })
                            }>
                              ارجاع
                            </a>



                          </td>
                          <td>
                                    <Input style={{ border: "2px solid black" }} type="select" onChange={(e) => (setnewetdue(e.target.value))}>
                                      <option style={{ fontSize: "24px", color: "black" }}>Select ClassName</option>
                                      <option style={{ fontSize: "24px", color: "black" }}>تقني مساندة في اعلامبة التصرف 1</option>
                                      <option style={{ fontSize: "24px", color: "black" }}>تقني مساندة في اعلامبة التصرف  2</option>
                                      <option style={{ fontSize: "24px", color: "black" }}> منشط روضة اطفال 1</option>
                                      <option style={{ fontSize: "24px", color: "black" }}> منشط روضة اطفال 2</option>
                                      <option style={{ fontSize: "24px", color: "black" }}> مربي طفولة اولى و مبكرة 1</option>
                                      <option style={{ fontSize: "24px", color: "black" }}> مربي طفولة اولى و مبكرة 2</option>
                                      <option style={{ fontSize: "24px", color: "black" }}> مربي طفولة اولى و مبكرة 1 فيفري</option>
                                      <option style={{ fontSize: "24px", color: "black" }}> مربي طفولة اولى و مبكرة 2 فيفري</option>
                                    </Input>     
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
                <table ref={tableRef} style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%', display: "none" }}>
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
                </table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">


              <button onClick={onDownload}> Export excel </button>


            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
