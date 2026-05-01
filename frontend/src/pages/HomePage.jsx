import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main data-testid="home-page" className="bg-pod-bg text-pod-text">
      <Navigation />
      <Hero />
      <About />
      <Rooms />
      <Menu />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
