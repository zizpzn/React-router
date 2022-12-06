import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signun">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
