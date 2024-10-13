import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SidebarComponent() {
  return (
    <Nav className="flex-column bg-light m-0">
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
    </Nav>
  );
}

export default SidebarComponent;
