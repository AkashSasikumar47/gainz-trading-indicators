import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-w-screen-sm bg-white mx-auto px-8 py-4 text-center"
      aria-label="Site Footer"
    >
      <p className="font-light text-xs text-neutral-400">
        © {new Date().getFullYear()} GAINZ. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
