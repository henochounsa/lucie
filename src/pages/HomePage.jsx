// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard, Hero, CustomerReviews, ImageTextGrid, TwoImageRow, ImageSquareSlider} from '../components';
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
      <Hero />
      <ImageSquareSlider/>
      <TwoImageRow/>
      <ImageTextGrid />
      <CustomerReviews />
    </Container>
  );
};

export default HomePage;
