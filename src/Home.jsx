import React from 'react'
import "./Home.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';

const products=[
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
  },
  {
    name: 'rtx',
    category: 'gpu',
    img:'',
    price:'1234',
    description:'fast as fk boi'

  }

]

const Home = () => {
  return (
    <div className='homepg'>
    <Navbar bg='dark' expand="lg" className="bg-body-tertiary" style={{ backgroundColor:"#212529"}}>
    <Container fluid >
      <Navbar.Brand className='nav'>Site Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='home-navbar'>
      
          <Button variant="outline-success" className='button' href='./cart'>Cart</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Row xs={1} md={2} className="g-4">
      {products.map((p, idx) => (
        <Col key={idx}>
          <ProductCard name={p.name} price={p.price} description={p.description}/> 
           {/* evide aan values pass cheyende response from db */}
        </Col>
      ))}
  </Row>
  </div>
   
);


}

export default Home