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
import img from "../views/img.jpg"
import { Card, CardHeader, CardBody, Row, Col, Input } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios"
import html2pdf from 'html2pdf.js';



function Map() {
  const [print, setprint] = useState(parseInt(localStorage.getItem('print')) || 1);
  const [student, setstudent] = useState([]);
  const [ladate, setladate] = useState(new Date());
  const createPdf = () => {
    const element = document.getElementById('pdf');

    const opt = {
      margin: 0,
      filename: 'شهادة الحضور.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: 'avoid-all', before: '#page-break' }
    };

    html2pdf().set(opt).from(element).save();
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("std"))
    if (items) {
      var s = items[0]
      setstudent(s)
    }
    localStorage.setItem('print',print );

    },[student])
    const handleClick = () => {
      setprint(print + 1);
      
    }
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div dir="rtl" id="pdf" >
                 
                  <img style={{ position: "relative", left: "166px" }} src={img} />
                  <p>&nbsp;</p>
                  <hr />
                  <h6 style={{ textAlign: "center" }}>مـــــــــــــــــــدرسة الجــــــــــــــــنوب للإعـــــــــــــــــــلامــــــــــية والإدارة</h6>
                  <p style={{ textAlign: "center" }}>مســــــــــــــجلة تحــــــت عـ9301382 ـدد</p>
                  
                  <h6 style={{ textAlign: "center" ,fontSize:"33px"}}><strong><u>شهادة حضــــــــــــور</u></strong></h6>
                  <div style={{position:"relative",right:"40px"}}>
                    <p style={{ textAlign: "right" }}>{print}/2223عدد</p>
                    <p>&nbsp;</p>
                    <h6 style={{ textAlign: "right" }}>إني الممضي &nbsp;أسفله&nbsp; <strong>علــــي &nbsp;المجـــــــاهــد </strong>&nbsp;مدير المدرســـة &nbsp;المذكورة &nbsp;أعــــلاه</h6>
                    <p>&nbsp;</p>
                    <h6 style={{ textAlign: "right" }}> (ة) أشهد أن التلميذ  &nbsp;
                      
                            <p style={{position:"relative","right":"92px",top:"-17px"}}>{student.first_name} {student.last_name}</p>

                        
                    </h6>



                    <p>&nbsp;</p>
                    <h6 style={{ textAlign: "right" }}>المولود (ة) في :   <p style={{position:"relative","right":"92px",top:"-17px"}}>{student.birthday}</p> 
                        
                         

                        
                    </h6>
                    <p>&nbsp;</p>
                    <div>
                      <h6 style={{ textAlign: "right" }}>مرسم (ة) بالمعهد المذكور و يزاول تكوينه بقســم 
                       
                           

                          
                      <p style={{position:"relative","right":"242px",top:"-17px"}}>{student.etude_level}</p> </h6>
                      

                    </div>

                    <p>&nbsp;</p>
                    <h6 style={{ textAlign: "right" }}>لحساب السنة التكوينية...2022./.2023</h6>
                    <p>&nbsp;</p>
                    <h6 style={{ textAlign: "right" }}>&nbsp;&nbsp;&nbsp; سلمت هذه الشهادة بطلب من المعني بالأمر  .
                    <select style={{ border: "1px solid black" }}>
                       
                            <option></option>
                            <option>لاستخراج جواز سفر</option>
                            <option>لاستخراج بطاقة التعريف</option>
                            <option>لمصالح التجنيد</option>

                      
                      </select>
                    </h6>
                  </div>
                  <h6 style={{ position: "relative", left: "50px" }}>مدنين في{ladate.getFullYear()}/{ladate.getMonth()+1}/{ladate.getDate()}</h6>
                  <h6 style={{ position: "relative", left: "89px" }}>المديـــــــــر</h6>

                  <p>&nbsp;</p>
                  <p>&nbsp;</p>

                  <p>&nbsp;</p>
                  <hr />
                  <h6 style={{ textAlign: "center" }}><strong>18 شارع عبد الحميد القاضي - &nbsp;طــــــريق بن قردان فوق الصيدلية- مدنين</strong></h6>
                  <p style={{ textAlign: "center" }}><strong>الهاتف : </strong><strong>75646644</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; الجوال : 98.212.091</strong></p>
                  <p style={{ textAlign: "center" }}><strong>E-MAIL&nbsp;: esia.formation@gmail.com</strong></p>
                  <p>&nbsp;</p>
                </div>

              </CardBody>
              <button type="button" onClick={()=>{createPdf();handleClick()}} > Print div</button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
