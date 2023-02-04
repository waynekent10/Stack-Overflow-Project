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
        <Nav.Link class="homeLink" href="/">Home</Nav.Link>
        <Nav.Link class="publicLink" href="/">Public</Nav.Link>
        <Nav.Link href="/question">Questions</Nav.Link>
        <Nav.Link href="tag">Tags</Nav.Link>
        <Nav.Link href="user">Users</Nav.Link>
        <Nav.Link href="company">Companies</Nav.Link>
      </Nav>
    </div>
  );
}
