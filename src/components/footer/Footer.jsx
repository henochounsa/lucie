
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaTiktok, FaSnapchat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#D9D9D9'}} className="py-4">
      <Container>
        <Row className="mb-3 text-start">
          <Col md={4}>
            <h5>Nous contacter</h5>
            <p>
              Email: contact@enterprise.com<br />
              Phone: 00010202202
              Nos conseillers vous répondent aux horaires
              suivantes :
              lun - ven : 8h30 -18h30 | sam : 9h00 -15h00
            </p>
          </Col>

          {/* Colonne About */}
          <Col md={4}>
            <h5>A propos de lucie</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-dark text-decoration-none">Qui sommes nous ?</a></li>
              <li><a href="#about" className="text-dark text-decoration-none">Conditions generales de vente</a></li>
              <li><a href="#services" className="text-dark text-decoration-none">Données personnelles et cookies</a></li>
            </ul>
          </Col>

          {/* Colonne Liens */}
          <Col md={4}>
            <h5>Pourquoi choisir Lucie</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-dark text-decoration-none"> Avis de nos clients</a></li>
            </ul>
            <p> Livraison offerte au BENIN</p>
            <p>30 jours satisfaits ou remboursés</p>
            <p>Paiements sécurisés jusqu'à 4x sans frais</p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h1>LUCIE</h1>
            <p>Bijoux et accessoires.</p>
            <div>
              <a href="https://wa.me/1234567890" className="text-light mx-2 ">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://instagram.com/yourprofile" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://tiktok.com/@yourprofile" className="text-light mx-2">
                <FaTiktok size={24} />
              </a>
              <a href="https://snapchat.com/add/yourprofile" className="text-light mx-2">
                <FaSnapchat size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

