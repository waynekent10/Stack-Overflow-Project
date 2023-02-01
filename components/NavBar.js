/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import { signIn, signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-white">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand text-black" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link text-black">
                  Products
                </a>
              </Link>
            </li>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <button type="button" className="btn btn-danger" onClick={signIn}>
              Sign In
            </button>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
