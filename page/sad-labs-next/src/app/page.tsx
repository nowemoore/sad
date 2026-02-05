"use client";

import { useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./views/Hero";
import Objective from "./views/Objective";
import Approach from "./views/Approach";
import Problem from "./views/Problem";
import Timeline from "./views/Timeline";
import TakeAction from "./views/TakeAction";

export default function Page() {
  return (
    <div className="App">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Objective />
      <Approach />
      <Problem />
      <Timeline />
      <TakeAction />
      <Footer />
    </div>
  );
}