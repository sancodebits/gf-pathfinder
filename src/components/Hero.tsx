import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EnrollmentModal from "@/components/EnrollmentModal";

const Hero = () => {
  const { t } = useLanguage();
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  
  const stats = [
    { icon: BookOpen, label: t('hero.courses'), value: "15+" },
    { icon: Users, label: t('hero.students'), value: "2000+" },
    { icon: Trophy, label: t('hero.success'), value: "95%" }
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg,rgb(26, 213, 198) 0%,rgb(15, 220, 243) 100%)' }} // pine green (#01796f) to orange (#ffa500)
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Adjusted mesh pattern opacity for this darker bg */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-10" style={{ backgroundSize: '50px 50px' }} />
        
        {/* Background blobs matching pine and orange */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#01796f]/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#01796f]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#01796f]/15 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-8 font-poppins tracking-tight">
              <span className="text-primary font-bold">{t('hero.excellence')}</span> in
              <span className="block bg-gradient-accent bg-clip-text text-transparent font-black">
                {t('hero.education')}
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed font-inter font-medium">
              {t('hero.subtitle')}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-6 justify-center mb-20" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-10 py-6 font-semibold shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => setIsEnrollmentOpen(true)}
            >
              {t('hero.start')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6 font-semibold backdrop-blur-sm shadow-colored">
              {t('hero.explore')}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/15 backdrop-blur-sm rounded-2xl mb-6 shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-110">
                  <stat.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3 font-poppins">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-base md:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modern Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--background))" />
        </svg>
      </div>
      
      <EnrollmentModal 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)} 
      />
    </section>
  );
};

export default Hero;
