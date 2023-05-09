import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/header/Banner";
import Card from "../components/card/Card";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        backgroundImage="./bg_home.png"
        text="Chez vous, partout et ailleurs"
      />
      <Card backgroundImage="./bg_home.png" title="titre1" />
    </div>
  );
};

export default Home;
