import React from 'react';
import { Nav } from 'react-bootstrap';

export default function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/question">Questions</Nav.Link>
      <Nav.Link href="/tag">Tags</Nav.Link>
      <Nav.Link href="/user">Users</Nav.Link>
      <Nav.Link href="/company">Companies</Nav.Link>
    </Nav>
  );
}
