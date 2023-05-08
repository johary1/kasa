import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/header/Banner";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        backgroundImage="./bg_home.png"
        text="Chez vous, partout et ailleurs"
      />
    </div>
  );
};

export default Home;
