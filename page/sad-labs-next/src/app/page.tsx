"use client";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./views/Hero";
import { landingNavItems } from "./navConfig";

export default function Page() {
  return (
    <div className="App">
      <LoadingScreen />
      <Hero viewType="landing" />
      <Footer />
    </div>
  );
}