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
  Col
} from "reactstrap";
import { useState, useEffect } from "react";
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

import axios from "axios"
function Tables() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/items/selectAll").then((response) => {
      setUsers(response.data)

    }, ["http://localhost:3001/api/items/selectAll"])
  })
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">قائمة التلامذ</CardTitle>
              </CardHeader>
              <CardBody>
                    <Table id="my-table" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                      <thead className="text-primary">
                        <tr>
                          <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px',fontSize: "23px",border: '1px solid black' }} className="text-right">القسم</th>
                          <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px',fontSize: "23px",border: '1px solid black' }}>تاريخ الولادة</th>
                          <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px',fontSize: "23px",border: '1px solid black' }}>بطاقة تعريف الوطنية</th>
                          <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px',fontSize: "23px",border: '1px solid black' }}>اللقب</th>
                          <th style={{ backgroundColor: 'gray', color: 'white', textAlign: 'left', padding: '5px',fontSize: "23px",border: '1px solid black' }}>الاسم</th>
                        </tr>
                      </thead>
                {users.map((elem) => {
                  return (
                      <tbody>
                        <tr>
                          <td className="text-right" style={{ border: '1px solid black', padding: '5px',fontSize: "20px" }}>{elem.etude_level}</td>
                          <td style={{ border: '1px solid black', padding: '5px',fontSize: "20px"  }}>{elem.birthday}</td>
                          <td style={{ border: '1px solid black', padding: '5px',fontSize: "20px"  }}>{elem.card_id}</td>
                          <td style={{ border: '1px solid black', padding: '5px',fontSize: "20px"  }}>{elem.last_name}</td>
                          <td style={{ border: '1px solid black', padding: '5px',fontSize: "20px"  }}><a href="">{elem.first_name}</a></td>
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
