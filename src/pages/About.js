import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/header/Banner";
import Collapse from "../components/collapse/Collapse";
import Footer from "../components/footer/Footer";

const collapseData = [
  {
    label: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
  },
  {
    label: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    label: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    label: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <Banner backgroundImage="./bg_about.png" />
      {collapseData.map((data) => (
        <Collapse
          key={data.label}
          label={data.label}
          description={data.description}
        />
      ))}
      <Footer />
    </div>
  );
};

export default About;
