import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import "./ProductCard.css"

const ProductCard = ({name,price,description}) => {
  return (
    <div>
    <Row>
      <Col>
    <Card bg='dark' className='img' style={{ width: '18em', paddingLeft:'10px'}}>
      
      <Card.Img variant="top" src="holder.js/100px180"/>
      <Card.Text>{name}</Card.Text>
    </Card>
      </Col>
      <Col>
      <Card className="info" bg="dark" text='white' style={{ width: '92%', textAlign:'right'}} >
      <Card.Body>
            <Card.Title>{description}</Card.Title>
            <Card.Text >
              Price:{price}
            </Card.Text>
            <Button variant="danger" href='/cart'>Add To Cart</Button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
    </div>

  )
}

export default ProductCard