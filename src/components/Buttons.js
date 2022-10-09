import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'


const Buttons=props=>{
    
    

    const handleClickDetect = () =>{
        
        props.handleClick();
        
      }

    if(!props.show)
    return null


    

    return(
            
        <>
      <Container style={{width: "200px",height: "300px",margin: "10px",position: 'absolute',
      bottom: 60,
      left: 0}}>
    <Row style={{height: "60px"}}>
        <Col><Button onClick={()=>handleClickDetect()} variant="primary" className="button" style={{margin: "20px",width: "150px"}}>Draw</Button></Col>
    </Row>
    <Row style={{height: "60px"}}>
        <Col><Button variant="primary" className="button" style={{margin: "20px",width: "150px"}}>NFT</Button></Col>
    </Row>
    <Row style={{height: "60px"}}>
        <Col><Button variant="primary" className="button" style={{margin: "20px",width: "150px"}}>Frame</Button></Col>
    </Row>
    <Row style={{height: "60px"}}>
        <Col><Button variant="primary" className="button" style={{margin: "20px",width: "150px"}}>Gesture</Button></Col>
    </Row>
    <Row  style={{height: "60px"}}>
        <Col><Button  variant="primary" className="button" style={{margin: "20px",width: "150px"}}>Sound</Button></Col>
    </Row>
</Container>


</>
    )//onClick={()=>setShowModal(false)} 
}

export default Buttons;