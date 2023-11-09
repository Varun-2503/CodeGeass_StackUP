import React from 'react';
import { useParams } from 'react-router-dom';
import './Home.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>

<Navbar bg='dark' expand="lg" className="bg-body-tertiary" style={{ backgroundColor:"#212529"}}>
    <Container fluid >
      <Navbar.Brand className='nav' href='/home'>Site Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='home-navbar'>
          <Button variant="outline-success" className='button' href='/cart'>Cart</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <h2>Product Detail</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
