"use client";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Purpose from "./components/Purpose/Purpose";
import CTA from "./components/CTA/CTA";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Purpose />
      <CTA />
    </div>
  );
}
