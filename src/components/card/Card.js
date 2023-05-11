import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { id, title, backgroundImage } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: `/room-${id}`,
      state: { id },
    });
  };

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={handleClick}
    >
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
