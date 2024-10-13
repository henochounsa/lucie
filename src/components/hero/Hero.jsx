// src/components/HeroSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid className="bg-primary text-white py-5">
      <Row className="text-center">
        <Col>
          <h1>Bienvenu sur Lucie!</h1>
          <p>Découvrez des produits étonnants à des prix imbattables.</p>
          <Button variant="light">Votre panier</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
