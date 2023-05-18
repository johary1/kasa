import React from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import data from "../data/room.json";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import InfoRoom from "../components/room/InfoRoom";
import Collapse from "../components/collapse/Collapse";
const DetailHome = () => {
  const { id } = useParams();
  //const room = data.rooms.find((room) => room.id === id);

  return (
    <div>
      <Header />
      {data.rooms
        .filter((room) => room.id === id)
        .map((room) => (
          <div className="gallery-container" key={`room-${room.id}`}>
            <Gallery pictures={room.pictures} />
            <InfoRoom room={room} />
            <div className="collapse-container">
              <Collapse
                key={`${room.id}-description`}
                label="Description"
                description={room.description}
              />
              <Collapse
                key={`${room.id}-equipments`}
                label="Equipments"
                description={room.equipments}
              />
            </div>
          </div>
        ))}

      <Footer />
    </div>
  );
};

export default DetailHome;
