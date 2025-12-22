import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import About from "@/components/About";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the DOM has rendered
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]); 
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <Cases />
        <About />
        <Pricing />
        <Process />
        <Contact />
      </main>
    </div>
  );
};

export default Index;