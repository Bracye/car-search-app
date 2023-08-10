import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Welcome to the Vehicle Search App!</h1>
      <p>This app allows you to search for cars and motorcycles based on make and model.</p>
      <p>Get started by exploring the following options:</p>
      <ul>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/motorcycles">Motorcycles</Link></li>
      </ul>
    </div>
  );
}

export default Main;