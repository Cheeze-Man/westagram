import React from "react";
import "./Main.css";
import Nav from "../../components/Nav";
import MainLeft from "../../components/MainLeft";
import MainRight from "../../components/MainRight";

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <main>
        <MainLeft />
        <MainRight />
      </main>
    </div>
  );
};

export default Main;
