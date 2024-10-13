// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart, onAddToFavorites, buttonText }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} // Adjust width and height
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="font-weight-bold">${product.price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product)}>Add to Cart</Button>
        <Button variant="secondary" onClick={() => onAddToFavorites(product)} className="ms-2">{buttonText || "❤️"}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
