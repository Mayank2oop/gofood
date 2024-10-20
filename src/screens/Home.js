import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Carousal></Carousal>
      </div>
        <div>
          <Card/>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
