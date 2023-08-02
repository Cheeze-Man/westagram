import React from "react";
import "./Main.css";
import Nav from "../../components/Nav";
import Feeds from "../../components/Feeds";
import MainRight from "../../components/MainRight";

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <main>
        <Feeds />
        <MainRight />
      </main>
    </div>
  );
};

export default Main;
