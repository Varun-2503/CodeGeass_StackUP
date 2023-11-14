import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import CartCard from './CartCard';
import './Cart.css';


const cart=[
    {
      name: 'shoes',
      category: 'Men',
      img:'',
      price: '345',
      description:'Mens shoe'
    },
    {
      name: 'watch',
      category: 'Women',
      img:'',
      price:'1234',
      description: 'Womens Watch'
    },
    {
      name: 'shoes',
      category: 'Women',
      img:'',
      price:'3244',
      description:'Womens shoe'
    }
  ]




const Cart = () => {
  return (
    <div className='cart'>
        <Navbar expand="lg" className="bg-body-tertiary ">
    <Container fluid >
      <Navbar.Brand href='./home'>Site Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='home-navbar'>
      
          <Button variant="outline-success" className='button' href='./home'>Home</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Row xs={1} md={3} className="g-4">
      {cart.map((p, idx) => (
        <Col key={idx}>
          <CartCard name={p.name} price={p.price} description={p.description}/> 
           {/* evide aan values pass cheyende response from db */}
        </Col>
      ))}
  </Row>
    </div>
  )
}

export default Cart