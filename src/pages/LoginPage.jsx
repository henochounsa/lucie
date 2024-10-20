import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Vérification des identifiants
    if (email === 'admin' && password === 'admin') {
      // Enregistrer l'état de connexion dans le local storage
      localStorage.setItem('isLoggedIn', 'true');
      alert("Connexion réussie !");
      navigate('/dashboard');
      // Redirige ou met à jour l'état de l'application ici si nécessaire
    } else {
      setError('Identifiants incorrects. Veuillez réessayer.');
    }
  };



  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Se connecter</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre utilisateur" name="email" required />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrez votre mot de passe" name="password" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Se connecter
        </Button>

        <Row className="mt-3">
          <Col className="text-center">
            <a href="/register">Créer un compte</a>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginPage;
