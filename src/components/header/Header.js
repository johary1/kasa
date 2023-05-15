import React from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

const headerColor = "#ff6060";
const Header = () => {
  return (
    <div className="header">
      <Logo color={headerColor} imgSrc="/favicon.png" />
      <Navigation />
    </div>
  );
};

export default Header;
