import React from 'react';

function Footer() {
  return (
    //Footer with some details and styling
    <footer className="text-center py-3" style={{ fontFamily: 'Staatliches' }}>
      <p className='fs-5'>Car Search App &copy; {new Date().getFullYear()} - Ernest Bracy</p>
    </footer>
  );
}

export default Footer;