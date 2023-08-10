import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-light p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Vehicle Search App</h1>
        <nav>
          <ul className="list-inline mb-0">
            <li className="list-inline-item"><Link to="/">Home</Link></li>
            <li className="list-inline-item"><Link to="/cars">Cars</Link></li>
            <li className="list-inline-item"><Link to="/motorcycles">Motorcycles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;