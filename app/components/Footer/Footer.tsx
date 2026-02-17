const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-w-screen-xl bg-white mx-auto px-4 py-8 md:px-8 text-center"
      aria-label="Site Footer"
    >
      <p className="font-light text-xs text-neutral-400">
        © {new Date().getFullYear()} GAINZ. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
