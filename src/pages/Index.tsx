import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoursesOverview from "@/components/CoursesOverview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CoursesOverview />
      <Testimonials />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
