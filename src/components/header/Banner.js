import React from "react";

const Banner = (props) => {
  const { backgroundImage, text } = props;

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {text && <div className="banner-text">{text}</div>}
    </div>
  );
};

export default Banner;
