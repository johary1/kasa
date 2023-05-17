import React from "react";

const InfoRoom = ({ room }) => {
  const { title, location, tags, host, rating } = room;
  const { name, picture } = host;
  const maxRating = 5;

  return (
    <div className="info-room">
      <div className="info-room-title-location">
        <h2 className="info-room-title">{title}</h2>
        <h4 className="info-room-location">{location}</h4>
      </div>
      <div className="info-room-tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="info-room-rating">
        {[...Array(maxRating)].map((_, i) => (
          <img
            key={i}
            src={i < rating ? "/filled-star.png" : "/empty-star.png"}
            alt={i < rating ? "Filled star" : "Empty star"}
            className="info-room-rating-star"
          />
        ))}
      </div>

      <div className="info-room-host">
        <span className="info-room-host-name">{name}</span>
        <img className="info-room-host-picture" src={picture} alt={name} />
      </div>
    </div>
  );
};

export default InfoRoom;
