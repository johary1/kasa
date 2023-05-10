import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/header/Banner";
import Card from "../components/card/Card";
import data from "../data/room.json";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        backgroundImage="./bg_home.png"
        text="Chez vous, partout et ailleurs"
      />
      <div className="card-container">
        {data.rooms.map((room) => (
          <Card key={room.id} backgroundImage={room.cover} title={room.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
