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
import { Navigate } from 'react-router-dom';
import App from './App.jsx';
import baseURL from './App.jsx';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');


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
    fetch(
      "http://127.0.0.1:8000/user",
      {
        method:"GET",
        mode:"cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
      }
      )
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
      console.log(error);
    });

}, []);

function submitLogout(e) {
  e.preventDefault();
  fetch(

    "/logout",
    {
    method:'POST',
    mode:"cors",
    headers: {
      'X-CSRFToken': csrftoken
    },
    withCredentials: true}
  ).then(function(res) {
    setCurrentUser(false);
  });
}
  
  if (currentUser) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Flipcart</Navbar.Brand>
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
            <h2>
              {currentUser}
            </h2>
            </div>
         <div className='homepg'>
         <Navbar bg='dark' expand="lg" className="bg-body-tertiary" style={{ backgroundColor:"#212529"}}>
         <Container fluid >
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
       </div>

    );
  }

  return (
    <h1>Login not possible</h1>
  )
 
}
export default Home