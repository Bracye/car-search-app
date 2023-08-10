import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-light py-3 "  style={{ textAlign: 'center', fontFamily: 'Staatliches, sans-serif' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className='text-dark'>Vehicle Search App</h1>
        <nav>
          <ul className="list-inline mb-0">
            <li className="list-inline-item fs-4" ><Link to="/" className='text-dark text-decoration-none'>Home</Link></li>
            <li className="list-inline-item fs-4"><Link to="/cars" className='text-dark text-decoration-none'>Cars</Link></li>
            <li className="list-inline-item fs-4"><Link to="/motorcycles" className='text-dark text-decoration-none'>Motorcycles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
