import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, Users, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import EnrollmentModal from "@/components/EnrollmentModal";
import schoolBuilding from "@/assets/school-building.jpg";
import achievement1 from "@/assets/achievement1.jpg";
import achievement2 from "@/assets/achievement2.jpg";
import achievement3 from "@/assets/achievement3.jpg";

const AchievementsShowcase = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  
  const achievements = [
    {
      icon: Trophy,
      title: t('achievements.excellence'),
      count: "25+",
      description: "Regional and National Educational Excellence Awards"
    },
    {
      icon: Award,
      title: t('achievements.jnvsuccess'),
      count: "98%",
      description: "Students qualifying in Navodaya Vidyalaya entrance exams"
    },
    {
      icon: Star,
      title: t('achievements.toppers'),
      count: "150+",
      description: "Students achieving 90%+ marks in board examinations"
    },
    {
      icon: Users,
      title: t('achievements.alumni'),
      count: "5000+",
      description: "Successful graduates in top colleges and careers"
    }
  ];

  const achievementImages = [
    {
      src: achievement1,
      alt: "JNV Selection Results",
      title: "JNV Entrance Success",
      description: "85% of our students cleared JNV entrance exam",
      stats: "340+ Students Selected"
    },
    {
      src: achievement2,
      alt: "Board Exam Toppers",
      title: "Board Exam Excellence", 
      description: "Outstanding results in Class 10th & 12th board exams",
      stats: "95% First Division"
    },
    {
      src: achievement3,
      alt: "Competitive Exam Results",
      title: "Competitive Success",
      description: "Students excelling in various competitive examinations",
      stats: "500+ Selections"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === achievementImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [achievementImages.length]);

  return (
    <section className="relative py-20 bg-gradient-vibrant overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-rotate-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            {t('achievements.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            {t('achievements.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Full Panel Image Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-strong">
            {/* Background Image */}
            <img 
              src={achievementImages[currentImageIndex].src} 
              alt={achievementImages[currentImageIndex].alt}
              className="w-full h-full object-cover transition-all duration-1000"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content Card - Transparent */}
            <div className="absolute bottom-6 left-6 right-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">{achievementImages[currentImageIndex].title}</h3>
                </div>
                <p className="text-white/90 mb-3">{achievementImages[currentImageIndex].description}</p>
                <div className="text-yellow-400 font-semibold text-lg">
                  {achievementImages[currentImageIndex].stats}
                </div>
              </Card>
            </div>
            
            {/* Image Indicators */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {achievementImages.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Achievements Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card/95 backdrop-blur-md border-border hover:bg-card transition-all duration-300 group animate-fade-in shadow-medium"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-accent font-poppins">{achievement.count}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-card/95 backdrop-blur-md border-border shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">{t('achievements.ready')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('achievements.join')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="flex-1 group"
                  onClick={() => setIsEnrollmentOpen(true)}
                >
                  {t('nav.enroll')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="flex-1 border-border text-foreground hover:bg-muted w-full">
                    {t('achievements.viewStories')}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years of Excellence", value: "8+" },
            { label: "Expert Faculties", value: "25+" },
            { label: "Study Programs", value: "15+" },
            { label: "Success Rate", value: "98%" }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 1}s` }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-poppins">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <EnrollmentModal 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)} 
      />
    </section>
  );
};

export default AchievementsShowcase;