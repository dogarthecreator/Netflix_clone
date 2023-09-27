import React from "react";
import MainComp from "../components/MainComp.jsx";
import Row from "../components/Row.jsx";
import requests from "../Requests.js";

const Home = () => {
  return <div className="text-white">
    <MainComp />
    <Row id='1' title='Popular' request={requests.requestPopular} />
    <Row id='2' title='Upcoming' request={requests.requestUpcoming} />
    <Row id='3' title='Movies from 2000' request={requests.request2000} />
    <Row id='4' title='Horror' request={requests.requestHorror} />
    <Row id='5' title='Science Fiction' request={requests.requestSciFi} />
  </div>;
};

export default Home;
