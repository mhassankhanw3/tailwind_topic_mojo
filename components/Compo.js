import React from "react";
import Boxes from "./Boxes";
import Cards from "./Cards";
import Content from "./Content";
import Datasource from "./Datasource";
import Feature from "./Feature";
import Footer from "./Footer";
import Hero from "./Hero";
import Launch from "./Launch";
import Navbar from "./Navbar";
import PlatFeature from "./PlatFeature";
import Pricing from "./Pricing";
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
      <PlatFeature />
      <Content />
      <Pricing />
      <Footer />
    </div>
  );
}
