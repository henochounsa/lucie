import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import product from '../../assets/img/Rectangle.png'
import product2 from '../../assets/img/Rectangle2.png'

const TwoImageRow = () => {
  return (
    <Container fluid className="p-0">
      <Row noGutters>
        <Col xs={12} md={6} className="p-0">
          <div 
            style={{
              backgroundImage: `url(${product})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px', // Adjust the height as needed
            }}
          ></div>
        </Col>
        <Col xs={12} md={6} className="p-0">
          <div 
            style={{
              backgroundImage: `url(${product2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px', // Adjust the height as needed
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoImageRow;
