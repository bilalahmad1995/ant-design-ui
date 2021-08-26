import React from "react";
import AppHero from "../components/Home/hero";
import AppAbout from "../components/Home/about";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
    </div>
  );
};

export default AppHome;
