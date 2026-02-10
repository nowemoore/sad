"use client";

import Navbar from "../components/Navbar";
import { businessNavItems, viewType } from "./navConfig";
import Footer from "../components/Footer";

import Hero from "../views/Hero";
import Objective from "./views/Objective";
import Approach from "./views/Approach";
import Problem from "./views/Problem";
import Timeline from "./views/Timeline";

export default function ForOrganizations() {
  return (
    <div className="App">
      <Navbar items={businessNavItems} viewType={viewType} />
      <Hero viewType="business" />
      <Problem />
      <Objective />
      <Approach />
      <Timeline />
      <Footer />
    </div>
  );
}