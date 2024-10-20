import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import firstProduct from '../../assets/img/Rectangle 77.svg';
import secondProduct from '../../assets/img/Rectangle 78.svg';
import product from '../../assets/img/Rectangle.png'
import product2 from '../../assets/img/Rectangle2.png'
const ImageTextGrid = () => {
  const items = [
    {
      title: "Notre nouvelle collection de bijoux pour les couples",
      description: "Schlumberger, le Blue Book 2024 :Tiffany Céleste nous entraîne dans un merveilleux univers de corps célestes. Nathalie Verdeille, directrice artistique,réinvente les créations surréalistes de Jean Schlumberger en une nouvelle collection sublime de Haute Joaillerie Tiffany.",
      imageUrl: product,
      buttonText: "DECOUVRIR"
    },
    {
      title: "LUCIE, la bijouterie en ligne à votre service",
      description: "Créée en 2010, la bijouterie en ligne Ocarat est l'e-shop des amoureux des bijoux, de la joaillerie et de l'horlogerie. Avec plus de 30 000 bijoux et montresréférencés, nous vous proposons le plus large catalogue de produitspourhomme, femme et enfant, disponible sur internet afin que vous trouviez à coup sûr le bijou ou la montre dont vous rêvez.",
      imageUrl: product2,
      buttonText: "EN SAVOIR PLUS"
    },
    {
      title: "Notre nouvelle collection de bijoux pour les couples",
      description: "Schlumberger, le Blue Book 2024 :Tiffany Céleste nous entraîne dans un merveilleux univers de corps célestes. Nathalie Verdeille, directrice artistique,réinvente les créations surréalistes de Jean Schlumberger en une nouvelle collection sublime de Haute Joaillerie Tiffany.",
      imageUrl: product,
      buttonText: "DECOUVRIR"
    },
  ];

  return (
    <Container className="my-5">
      {items.map((item, index) => (
        <Row key={index} className="mb-4 align-items-center">
          <Col 
            md={6} 
            className={`order-${index % 2 === 0 ? '1' : '2'} order-md-${index % 2 === 0 ? '1' : '2'}`}
          >
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Button variant="primary">{item.buttonText}</Button>
            </div>
          </Col>
          <Col 
            md={6} 
            className={`order-${index % 2 === 0 ? '2' : '1'} order-md-${index % 2 === 0 ? '2' : '1'}`}
          >
            <div 
              className="image-container" 
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '8px',
              }}
            ></div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ImageTextGrid;
