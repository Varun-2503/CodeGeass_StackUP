import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import "./ProductCard.css"
import { Link } from 'react-router-dom'; 

const ProductCard = ({id,name,price,description}) => {
  return (
    <div>
    <Row>
      <Col>
    <Card bg='dark' className='img' style={{ width: '18em', paddingLeft:'10px'}}>
      
      <Card.Img variant="top" src="holder.js/100px180"/>
      <Card.Text>{name}</Card.Text>

      <Link to={`/product/${id}`} className="btn btn-primary">
          View Details
        </Link>
    </Card>
      </Col>
      <Col>
      <Card className="info" bg="dark" text='white' style={{ width: '92%', textAlign:'right'}} >
      <Card.Body>
        <Col className='cls1'>
          <Row>
            <Button  variant="dark" href={`/product/${id}`}>
            <Card.Title>{description}</Card.Title>
            <Card.Text >
              Price:{price}
            </Card.Text>
            </Button>
            <Button variant="danger" href='/cart'>Add To Cart</Button>
          </Row> 
          </Col>
      </Card.Body>
      </Card>
      </Col>
      </Row>
    </div>

  )
}

export default ProductCard