import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Banner from "../components/header/Banner";
import data from "../data/room.json";
import Collapse from "../components/collapse/Collapse";

const DetailHome = () => {
  const location = useLocation();
  //console.log(location.pathname);
  const linkParams = location.pathname.split("-");
  const idLink = linkParams[1];

  console.log(idLink);
  return (
    <div>
      <Header />
      <Banner backgroundImage="./bg_detail.png" />
      {data.rooms
        .filter((room) => room.id === idLink)
        .map((room) => (
          <div className="collapsible-container" key={`room-${room.id}`}>
            <Collapse
              key={`${room.id}-description`}
              label="Description"
              description={room.description}
              width="582px"
            />
            <Collapse
              key={`${room.id}-equipments`}
              label="Equipments"
              description={room.equipments}
              width="582px"
            />
          </div>
        ))}
    </div>
  );
};

export default DetailHome;
