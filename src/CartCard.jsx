import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Col, Row } from 'react-bootstrap';
 
 const CartCard = ({name,price}) => {
   return (
    <div className='cartcard' >
    <Card style={{ width: '8rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" className='body'/>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{name}</Card.Title>
            <Card.Text >
              <small className="price">Price:{price}</small>
            </Card.Text>
          </Col>
          <Col>
            <Button variant="primary">Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </div>
   )
 }
 
 export default CartCard