import React from "react";
import Feature from "./Feature";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Users from "./Users";

export default function () {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Users />
    </div>
  );
}
