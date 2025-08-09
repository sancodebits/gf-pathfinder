import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, Users, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import schoolBuilding from "@/assets/school-building.jpg";
import achievement1 from "@/assets/achievement1.jpg";
import achievement2 from "@/assets/achievement2.jpg";
import achievement3 from "@/assets/achievement3.jpg";

const AchievementsShowcase = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
      alt: "Students celebrating academic achievement"
    },
    {
      src: achievement2,
      alt: "Modern classroom with awards"
    },
    {
      src: achievement3,
      alt: "JNV entrance coaching success"
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
          {/* School Building Image with Floating Photos */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong h-96">
              <img 
                src={schoolBuilding} 
                alt="Gayatri Foundation School Building"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20" />
              
              {/* Full Panel Sliding Achievement Images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 rounded-xl overflow-hidden shadow-strong">
                  {achievementImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <Card className="p-6 bg-card/95 backdrop-blur-md border-border shadow-medium">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Modern Learning Campus</h3>
                  <p className="text-muted-foreground">State-of-the-art facilities designed for holistic education</p>
                </Card>
              </div>
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
                <Button variant="accent" size="lg" className="flex-1 group">
                  {t('achievements.enroll')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-border text-foreground hover:bg-muted">
                  {t('achievements.stories')}
                </Button>
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
    </section>
  );
};

export default AchievementsShowcase;