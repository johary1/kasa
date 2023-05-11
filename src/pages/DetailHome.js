import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/header/Banner";
import data from "../data/room.json";
import Card from "../components/card/Card";

const DetailHome = () => {
  return (
    <div>
      <Header />
      <Banner backgroundImage="./bg_detail.png" />
      {data.rooms.map((room) => (
        <Card key={room.id} backgroundImage={room.cover} title={room.title} />
      ))}
    </div>
  );
};

export default DetailHome;
