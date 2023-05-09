import React from "react";

const Logo = (props) => {
  const { color, imgSrc } = props;
  return (
    <div className="logo" style={{ color: color }}>
      K<img src={imgSrc} alt="logo Kasa" />
      sa
    </div>
  );
};

export default Logo;
