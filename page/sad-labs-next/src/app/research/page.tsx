"use client";

import Navbar from "../components/Navbar";
import { researchNavItems, viewType } from "./navConfig";
import Footer from "../components/Footer";

import Hero from "../views/Hero";
import Objective from "./views/Objective";
import Approach from "./views/Approach";
import Problem from "./views/Problem";
import Timeline from "../research/views/Timeline";
import TakeAction from "./views/TakeAction";


export default function ForResearchers() {
  return (
    <div className="App">
      <Navbar items={researchNavItems} viewType={viewType} /> 
      <Hero viewType="research" />
      <Objective />
      <Problem />      
      <Approach />
      <Timeline />
      <TakeAction />
      <Footer />
    </div>
  );
}