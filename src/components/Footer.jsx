import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-3" style={{ fontFamily: 'Staatliches, regular' }}>
      <p className='fs-5'>Car Search App &copy; {new Date().getFullYear()}</p>
      <p className='fs-5'>Created by - Ernest Bracy</p>
    </footer>
  );
}

export default Footer;