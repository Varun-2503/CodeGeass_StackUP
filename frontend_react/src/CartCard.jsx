import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Col, Row } from 'react-bootstrap';
import "./CartCard.css";
 
 const CartCard = ({name,price}) => {
   return (
    <div className='cartcard' >
    <Row>
      <Col>
    <Card bg='dark' className='img' style={{ width: '8em', paddingLeft:'10px'}}>
      
      <Card.Img variant="top" src="holder.js/100px180"/>
    </Card>
      </Col>
      <Col>
      <Card className="desc" bg="dark" text='white' style={{ width: '92%', textAlign:'right'}} >
      <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text >
              <small className="price">Price:{price}</small>
            </Card.Text>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row>
        <Col>
      <Card bg='dark' className='del' style={{width: '95%',textAlign:'right'}}>
      <Col>
            <Button variant="danger">Delete</Button>
      </Col>
    </Card>
    </Col>
    </Row>
    </div>
   )
 }
 
 export default CartCard