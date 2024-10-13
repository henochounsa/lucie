import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Sidebar} from '../components';

function DashboardLayout({ children }) {
  return (
    <Container  fluid className='p-0'>
      <Row  className='p-4 h-100'>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className="mt-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardLayout;
