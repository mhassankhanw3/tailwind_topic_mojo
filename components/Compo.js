import React from "react";
import Boxes from "./Boxes";
import Cards from "./Cards";
import Datasource from "./Datasource";
import Feature from "./Feature";
import Hero from "./Hero";
import Launch from "./Launch";
import Navbar from "./Navbar";
import Users from "./Users";

export default function () {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Users />
      <Boxes />
      <Launch />
      <Datasource />
      <Cards />
    </div>
  );
}
