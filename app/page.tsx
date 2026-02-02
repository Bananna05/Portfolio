'use client'; 

import { useState } from "react";

// Relative imports to ensure TypeScript finds them easily
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";      
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ProjectForm from "../components/ProjectForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  // If the user clicked "Get in touch", show the form
  if (showForm) {
    return <ProjectForm onClose={() => setShowForm(false)} />;
  }

  // Otherwise, show the main portfolio
  return (
    <main className="min-h-screen bg-white text-black relative overflow-x-hidden">
      <Navbar />
      <Hero onStartProject={() => setShowForm(true)} />
      <About /> 
      <Projects />
      <Services />
      <Footer onStartProject={() => setShowForm(true)} />
    </main>
  );
}