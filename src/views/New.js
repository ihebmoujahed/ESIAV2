import { useState, useEffect } from "react";
import axios from "axios"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Select,
  Row,
  Col
} from "reactstrap";
import $ from "jquery"

const New = ({ inputs, title }) => {
  const [image, setFile] = useState("");
  const [taswira, settaswira] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [gender, setgender] = useState("");
  const [Age, setAge] = useState("");
  const [Card_ID, setCard_ID] = useState("");
  const [Etude, setEtude] = useState("");
  const [Place, setPlace] = useState("");
  const [leveleducation, setleveleducation] = useState("");

  const addUser = () => {

    axios.post("http://localhost:3001/api/items/AddUser", {
      first_name: FirstName,
      last_name: LastName,
      gender: gender,
      birthday: Age,
      card_id: Card_ID,
      etude_level: Etude,
      place: Place,
      leveleducation: leveleducation,
      image_user: taswira
    }).then((response) => {
      console.log(response);
      $("#al").show(100)
      $("#al").hide(10000)
      // $(".vh-100").hide()
    }).catch((error) => {
      $("#ab").show(100)
      $("#ab").hide(10000)
    })

  }
  const uploadimages = (files) => {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "suwrrek3")

    axios.post("https://api.cloudinary.com/v1_1/esia/image/upload", formData).then((response) => {
      console.log(response.data.secure_url)
      settaswira(response.data.secure_url)
    })
  }
  return (
    <Col md="8" style={{ position: "relative", top: "20%", left: "20%" }}>
      <Card className="card-user">

        <CardBody>
          <Form>
            <div class="alert alert-success" id="al" style={{ display: "none" }}>
              <strong>Succès!</strong> Cette boîte d'alerte peut indiquer une action réussie ou positive.

            </div>
            <div class="alert alert-danger" id="ab" style={{ display: "none" }}>
              <strong>ERRORRR!</strong> Cette boîte d'alerte peut indiquer une action réussie ou positive.

            </div>
            <div>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black", }}>الاسم</label>
                    <Input style={{border: "2px solid black",fontSize:"29px;" }}
                      onChange={(e) => setFirstName(e.target.value)}
                      name="FirstName"
                      placeholder="Prenom"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="6">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>اللقب</label>
                    <Input style={{border: "2px solid black"}}
                      onChange={(e) => setLastName(e.target.value)}

                      name="LastName"
                      placeholder="Nome"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>الجنس</label>
                    <Input style={{border: "2px solid black"}} type="select" onChange={(e) => setgender(e.target.value)}>
                      <option >Select Gender</option>
                      <option style={{fontSize:"24px",color:"black"}}>انثى</option>
                      <option style={{fontSize:"24px",color:"black"}}>ذكر</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>تاريخ الولادة</label>
                    <Input style={{border: "2px solid black"}}
                      name="Age" onChange={(e) => setAge(e.target.value)}
                      placeholder="date de naissance"
                      type="date"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="4">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>رقم بطاقة تعريف الوطنية</label>
                    <Input style={{border: "2px solid black"}}
                      name="Card_ID" onChange={(e) => setCard_ID(e.target.value)}
                      placeholder="Carte d'identité"
                      type="number"
                    />
                  </FormGroup>
                </Col>
                <Col className="px-1" md="4">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>القسم</label>
                    <Input style={{border: "2px solid black"}} type="select" onChange={(e) => (setEtude(e.target.value))}>
                      <option style={{fontSize:"24px",color:"black"}}>Select ClassName</option>
                      <option style={{fontSize:"24px",color:"black"}}>تقني مساندة في اعلامبة التصرف 1</option>
                      <option style={{fontSize:"24px",color:"black"}}>تقني مساندة في اعلامبة التصرف  2</option>
                      <option style={{fontSize:"24px",color:"black"}}> منشط روضة اطفال 1</option>
                      <option style={{fontSize:"24px",color:"black"}}> منشط روضة اطفال 2</option>
                      <option style={{fontSize:"24px",color:"black"}}> مربي طفولة اولى و مبكرة 1</option>
                      <option style={{fontSize:"24px",color:"black"}}> مربي طفولة اولى و مبكرة 2</option>
                      <option style={{fontSize:"24px",color:"black"}}> مربي طفولة اولى و مبكرة 1 فيفري</option>
                      <option style={{fontSize:"24px",color:"black"}}> مربي طفولة اولى و مبكرة 2 فيفري</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>مكان الولادة</label>
                    <Input style={{border: "2px solid black"}} placeholder="Ville" name="Place" onChange={(e) => setPlace(e.target.value)} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>المستوى التعلبمي</label>
                    <Input style={{border: "2px solid black"}}
                      type="text" name="niveau éducation" onChange={(e) => setleveleducation(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label style={{fontSize:"24px",color:"black"}}>صورة شمسية</label>
                    <Input 
                      type="file" onChange={(e) => setFile(e.target.files[0])}

                    />
                    <div className="update ml-auto mr-auto">
                      <button
                        class="btn btn-danger"
                        color="primary"
                        style={{fontSize:"203%"}}
                        onClick={uploadimages}
                      >
                        رفع الصورة
                      </button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <button 
                  style={{fontSize:"203%"}}
                    color="primary"
                    onClick={addUser}
                  >
                    تسجيل
                  </button>
                </div>
              </Row>
            </div>

          </Form>
        </CardBody>

      </Card>
    </Col>
  );
};

export default New;
