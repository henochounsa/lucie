import React from 'react';
import { Button } from 'react-bootstrap';
import heroImage from '../../assets/img/bg.png' 

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px', // Ajustez la hauteur selon vos besoins
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Couche d'ombre */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ombre noire semi-transparente
        }}
      ></div>

      <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '20px' }}>
          L'Art de la Joaillerie,
          <br />
          La Passion de l'Excellence
        </h1>
        <Button variant="light" size="lg" style={{ padding: '10px 20px' }}>
          VOIR NOTRE SÉLECTION
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
