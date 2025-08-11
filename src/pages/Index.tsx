import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoursesOverview from "@/components/CoursesOverview";
import AchievementsShowcase from "@/components/AchievementsShowcase";
import FounderDesk from "@/components/FounderDesk";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CoursesOverview />
      <AchievementsShowcase />
      <FounderDesk />
      <Testimonials />
      <Footer />
      
    </div>
  );
};

export default Index;
