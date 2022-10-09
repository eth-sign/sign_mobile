import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Square } from 'react-bootstrap-icons';
import { SendFill } from 'react-bootstrap-icons';

const FoundView=props=>{
    console.log(props);
    if(!props.showModal)
    return null

    return(
        <>
      <Container onClick={()=>this.setShowModal(false)} style={{width: "350px",height: "600px",margin: "0px",position: 'absolute',
      bottom: 100,
      left: 0,
      backgroundColor:"white"}}>
    <Row style={{height: "60px"}}>
        <Col style={{backgroundColor: "var(--bs-gray-300)",margin: "10px",borderRadius: "9px"}}><Form.Label style={{marginTop:"5px",color:"black",fontSize:"22px"}}>A6798x76545</Form.Label><SendFill style={{marginLeft:"15px",marginTop:"-5px"}} color="black" size={20} /></Col>
    </Row>
    <Row style={{height: "200px"}}>
        <Col style={{backgroundColor: "var(--bs-gray-300)",margin: "10px",borderRadius: "8px",height: "180px"}}><Square style={{marginTop:"12px"}} color="black" size={150} /></Col>
    </Row>
    <Row style={{height: "300px",backgroundColor: "var(--bs-gray-300)",borderRadius: "10px",marginTop: "20px",marginRight: "0px",marginLeft: "0px"}}>
        <Col style={{height: "50px"}}>
            <Row style={{height: "50px"}}>
                <Col style={{margin: "8px",backgroundColor: "white",borderRadius: "7px"}}><Form.Label style={{marginTop:"5px",color:"black",fontSize:"12px"}}>Comments! Comments! Comments!</Form.Label></Col>
            </Row>
            <Row style={{height: "50px"}}>
                <Col style={{margin: "8px",backgroundColor: "white",borderRadius: "7px"}}><Form.Label style={{marginTop:"5px",color:"black",fontSize:"12px"}}>Comments! Comments! Comments!</Form.Label></Col>
            </Row>
            <Row style={{height: "50px"}}>
                <Col style={{margin: "8px",backgroundColor: "white",borderRadius: "7px"}}><Form.Label style={{marginTop:"5px",color:"black",fontSize:"12px"}}>Comments! Comments! Comments!</Form.Label></Col>
            </Row>
            <Row style={{height: "50px"}}>
                <Col style={{margin: "8px",backgroundColor: "white",borderRadius: "7px"}}><Form.Label style={{marginTop:"5px",color:"black",fontSize:"12px"}}>Comments! Comments! Comments!</Form.Label></Col>
            </Row>
            <Row style={{height: "100px"}}>
                <Col style={{margin: "8px",backgroundColor: "white",borderRadius: "7px"}}></Col>
                <Col><Button variant="primary" style={{marginTop: "29px"}}>Add</Button></Col>
            </Row>
        </Col>
    </Row>
</Container>
</>
    )
}

export default FoundView;