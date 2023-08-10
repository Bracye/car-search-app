import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Staatliches, sans-serif' }}>
      <h2>This app allows you to search for cars and motorcycles based on make and model.</h2>
      <h3>Start searching with the following options:</h3>
      <div className="d-flex justify-content-center">
        <div className="btn-group" role="group">
          <Link to="/cars" className="btn btn-light btn-lg">Cars</Link>
          <Link to="/motorcycles" className="btn btn-light btn-lg">Motorcycles</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
