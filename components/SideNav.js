import Link from 'next/link';
import React from 'react';
import { Nav } from 'react-bootstrap';

export default function SideNav() {
  return (
    <div className="sidebar" style={{ color: 'grey', paddingLeft: '20px' }}>
      <Nav
        defaultActiveKey="/home"
        className="flex-column border-right shadow-right left-aligned"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Link passHref href="/">
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
    </div>
  );
}
