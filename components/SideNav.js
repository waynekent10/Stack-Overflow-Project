import React from 'react';
import { Nav } from 'react-bootstrap';

export default function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Questions</Nav.Link>
      <Nav.Link eventKey="link-1">Tags</Nav.Link>
      <Nav.Link eventKey="link-2">Users</Nav.Link>
      <Nav.Link eventKey="link-2">Companies</Nav.Link>
    </Nav>
  );
}
