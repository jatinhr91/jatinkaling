import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white text-center py-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} BitLinks. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
