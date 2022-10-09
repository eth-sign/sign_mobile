import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Circle } from 'react-bootstrap-icons';

const NotFoundView=props=>{
    console.log(props);
    if(!props.showModalNot)
    return null

    return(
            
        <>
      <Container onClick={()=>this.setShowModal(false)} style={{width: "350px",height: "350px",margin: "0px",position: 'absolute',
      bottom: 250,
      left: 0,
      backgroundColor:"white"}}>
    <Row style={{height: "60px"}}>
        <Col style={{backgroundColor: "var(--bs-gray-300)",margin: "10px",borderRadius: "9px"}}><Form.Label style={{marginTop:"5px",color:"black",fontSize:"22px"}}>UNKNOWN SIGN</Form.Label></Col>
    </Row>
    <Row style={{height: "200px"}}>
        <Col style={{backgroundColor: "var(--bs-gray-300)",margin: "10px",borderRadius: "8px",height: "180px"}}><Circle style={{marginTop:"12px"}} color="black" size={150} /></Col>
    </Row>
    <Row style={{height: "80px",marginTop: "20px",marginRight: "0px",marginLeft: "0px"}}>
        <Col style={{height: "50px"}}>
            <Row style={{height: "100px"}}>
                <Col><Button variant="primary" style={{marginTop: "5px"}}>MINT</Button></Col>
            </Row>
        </Col>
    </Row>
</Container>
</>
    )
}

export default NotFoundView;