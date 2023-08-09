import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css'

function Footer() {
  return (
    <footer className="text-center py-3" style={{ fontFamily: 'Staatliches' }}>
      <p className='fs-5'>Car Search App &copy; {new Date().getFullYear()} - Ernest Bracy</p>
    </footer>
  );
}

export default Footer;