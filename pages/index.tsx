import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { About, Contact, Header, Hero, Portfolio, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y scroll snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 "
    >
      {/* HEAD */}
      <Head>
        <title>Usama's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* //HEAD */}

      {/* HEADER */}
      <Header />
      {/* // HEADER */}

      {/* HERO */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* //HERO */}

      {/* ABOUT */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* //ABOUT */}

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* //Skills */}

      {/* Portfolio */}
      <section id="portfolio" className="snap-center">
        <Portfolio />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>

    
    </div>
  );
};

export default Home;
