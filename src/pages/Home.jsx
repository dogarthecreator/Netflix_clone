import React from "react";
import MainComp from "../components/MainComp.jsx";
import Row from "../components/Row.jsx";
import requests from "../Requests.js";

const Home = () => {
  return <div className="text-white">
    <MainComp />
    <Row title='Popular' request={requests.requestPopular} />
  </div>;
};

export default Home;
