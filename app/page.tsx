"use client";

import Hero from "./Sections/hero";
import About from "./Sections/about";
import Project from "./Sections/project";


export default function Home() {

  return (
    <main className="min-h-screen bg-background">

      <Hero />
      <About />
      <Project />
    </main>
  );
}