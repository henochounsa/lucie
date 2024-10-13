import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutPage.css'; // Optional: Import the CSS for additional styles

function AboutPage() {
  return (
    <Container fluid className="my-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            We are dedicated to providing the best service and experience to our users.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {/* Use d-flex and flex-wrap to ensure equal height cards */}
        <Col md={4} className="d-flex">
          <Card className="mb-4 flex-fill shadow-sm">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To empower users with the tools and knowledge they need to succeed in their endeavors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex">
          <Card className="mb-4 flex-fill shadow-sm">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To create a platform where everyone can easily access the information and services they need.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex">
          <Card className="mb-4 flex-fill shadow-sm">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, Innovation, and User-Centric Design are at the heart of everything we do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
