import Link from 'next/link';
import React from 'react';
import { Nav } from 'react-bootstrap';

export default function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Link passHref href="/">
        <Nav.Link>Home</Nav.Link>
      </Link>
      <Link passHref href="/question">
        <Nav.Link>Questions</Nav.Link>
      </Link>
      <Link passHref href="/tag">
        <Nav.Link>Tags</Nav.Link>
      </Link>
      <Link passHref href="/user">
        <Nav.Link>Users</Nav.Link>
      </Link>
      <Link passHref href="/company">
        <Nav.Link>Companies</Nav.Link>
      </Link>
    </Nav>
  );
}
