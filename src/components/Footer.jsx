import React from 'react';

function Footer() {
  return (
    //Footer with some details and styling
    <footer className="text-center py-5" style={{ fontFamily: 'Staatliches' }}>
      <p className='fs-3'>Vehicle Search App &copy; {new Date().getFullYear()} - Ernest Bracy</p>
    </footer>
  );
}

export default Footer;