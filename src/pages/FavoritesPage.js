// src/pages/FavoritesPage.js
import React from 'react';
import { Container, Row, Col, Button, Card, Alert } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import products from '../data/products'; // Import your products data

const FavoritesPage = () => {
  const [favorites, setFavorites] = React.useState(products.filter(product => product.isFavorite));

  const handleRemoveFromFavorites = (productToRemove) => {
    setFavorites(favorites.filter(product => product.id !== productToRemove.id));
    // Additional logic to remove from persistent storage if applicable
  };

  return (
    <Container fluid className="my-5">
      <h2 className="text-center my-4">Your Favorites</h2>
      {favorites.length > 0 ? (
        <Row className="justify-content-center">
          {favorites.map((product) => (
            <Col key={product.id} md={4} sm={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: '200px', objectFit: 'cover' }} // Adjust height for a better layout
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{product.name}</Card.Title>
                  <Card.Text className="text-center text-muted">{product.description}</Card.Text>
                  <Card.Text className="font-weight-bold text-center">${product.price.toFixed(2)}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button 
                      variant="primary" 
                      onClick={() => console.log(`Added to cart: ${product.name}`)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </Button>
                    <button 
                      onClick={() => handleRemoveFromFavorites(product)} 
                      className="border-0 bg-transparent text-danger"
                      aria-label="Remove from favorites"
                    >
                      <FaHeart size={24} />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="info" className="text-center">
          No favorite products found. Start adding some!
        </Alert>
      )}
    </Container>
  );
};

export default FavoritesPage;
