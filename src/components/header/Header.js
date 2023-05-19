import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const headerColor = "#ff6060";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo color={headerColor} imgSrc="/favicon.png" />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
