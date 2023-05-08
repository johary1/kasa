import React from "react";
import Header from "../components/header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Error404 = () => {
  return (
    <div>
      <Header />

      <p className="title-404">404</p>
      <p className="text-404">Oups! La page que vous demandez n'existe pas</p>
      <NavLink to="/">
        <li className="back-home">Retourner sur la page d'accueil</li>
      </NavLink>
      <Footer />
    </div>
  );
};

export default Error404;
