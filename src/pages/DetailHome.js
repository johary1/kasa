import React from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import data from "../data/room.json";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import InfoRoom from "../components/room/InfoRoom";
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
          </div>
        ))}

      <Footer />
    </div>
  );
};

export default DetailHome;
