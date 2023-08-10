import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Link to="/cars">Car Search</Link>
      <Link to="/motorcycles">Motorcycle Search</Link>
    </div>
  );
}

export default Main;