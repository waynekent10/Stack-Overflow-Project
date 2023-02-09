/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-white container-fluid"
      style={{
        borderBottom: '1px solid #ccc', boxShadow: '0px 0px 10px #ccc', position: 'fixed', top: 0, width: '100%', height: '60px', zIndex: 500,
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <Link passHref href="/">
          <a className="navbar-brand text-black" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="" style={{ marginLeft: '250px' }} />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse container-fluid " id="navbarTogglerDemo01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link text-black">
                  Products
                </a>
              </Link>
            </li>
            <SearchBar />
            <li className="nav-item">
              <Link passHref href="/profile">
                <a className="nav-link text-black">
                  Profile
                </a>
              </Link>
            </li>
            <div id="btnDiv" className="justify-content-end">
              <button type="button" className="btn btn-danger justify-content-end" id="signoutBtn" onClick={signOut}>
                Sign Out
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
