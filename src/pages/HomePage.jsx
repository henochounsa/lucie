// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {ProductCard,Hero} from '../components';
import products from '../data/products';


const HomePage = () => {
  const handleAddToCart = (product) => {
    // Logic to add the product to cart
    console.log(`Add to cart: ${product.name}`);
  };

  const handleAddToFavorites = (product) => {
    // Logic to add the product to favorites
    console.log(`Added to favorites: ${product.name}`);
  };

  return (
    <Container fluid className="my-5">
      <Hero/>
      <h2 className="text-center my-4">Nos  Produits</h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} md={3}>
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onAddToFavorites={handleAddToFavorites}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
