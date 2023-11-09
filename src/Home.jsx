import React from 'react'
import client from './App.jsx'
import { useState,useEffect } from 'react';
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
  const [currentUser, setCurrentUser] = useState();
  const [username,setUsername]=useState('');

  useEffect(() => {
    client.get("/user")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/logout",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }
  
  if (currentUser) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Authentication App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <form onSubmit={e => submitLogout(e)}>
                  <Button type="submit" variant="light">Log out</Button>
                </form>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="center">
            <h2>You're logged in!</h2>
          </div>
        </div>
    );
  }

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