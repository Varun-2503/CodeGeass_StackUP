import React from 'react'
import Card from 'react-bootstrap/Card';

const ProductCard = ({name,price,description}) => {
  return (
        <Card style={{width:'300px'}}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Price:{price}</small>
        </Card.Footer>
      </Card>

  )
}

export default ProductCard