import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto">
        <p>Made with ❤️ by the RetailIQ Team</p>
        <p>© {new Date().getFullYear()} RetailIQ - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
