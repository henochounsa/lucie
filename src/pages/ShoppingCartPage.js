// src/pages/ShoppingCartPage.js
import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa'; // Importing icons
import products from '../data/products'; // Import your products data

const ShoppingCartPage = () => {
  // Sample cart items, this should be fetched from your state or context
  const [cartItems, setCartItems] = React.useState(products.filter(product => product.isInCart));
  
  const totalAmount = cartItems.reduce((acc, product) => acc + product.price, 0);

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product.id !== productToRemove.id));
    // Additional logic to remove from persistent storage if applicable
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // Implement checkout logic here
  };

  return (
    <Container fluid className="my-5">
      <h2 className="text-center my-4">Votre panier</h2>
      {cartItems.length > 0 ? (
        <Row>
          <Col md={8}>
            <Card className="shadow-sm mb-4">
              <Card.Header>
                <h5><FaShoppingCart /> Articles dans votre panier</h5>
              </Card.Header>
              <ListGroup variant="flush">
                {cartItems.map((product) => (
                  <ListGroup.Item key={product.id} className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px', marginRight: '10px' }}
                      />
                      <div>
                        <h6 className="mb-1">{product.name}</h6>
                        <small className="text-muted">${product.price.toFixed(2)}</small>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      onClick={() => handleRemoveFromCart(product)}
                      className="text-danger"
                      aria-label="Remove from cart"
                    >
                      <FaTrashAlt size={20} />
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Header>
                <h5>Montant Total </h5>
              </Card.Header>
              <Card.Body>
                <h4 className="text-center">${totalAmount.toFixed(2)}</h4>
                <Button variant="success" className="w-100" onClick={handleCheckout}>
                  Payer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Alert variant="info" className="text-center">
          Your cart is empty. Start adding some products!
        </Alert>
      )}
    </Container>
  );
};

export default ShoppingCartPage;
