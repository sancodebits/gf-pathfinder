import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, Users, Target, ArrowRight } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import achievement1 from "@/assets/achievement1.jpg";
import achievement2 from "@/assets/achievement2.jpg";
import achievement3 from "@/assets/achievement3.jpg";

const AchievementsShowcase = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Excellence Awards",
      count: "25+",
      description: "Regional and National Educational Excellence Awards"
    },
    {
      icon: Award,
      title: "JNV Success Rate",
      count: "98%",
      description: "Students qualifying in Navodaya Vidyalaya entrance exams"
    },
    {
      icon: Star,
      title: "Board Toppers",
      count: "150+",
      description: "Students achieving 90%+ marks in board examinations"
    },
    {
      icon: Users,
      title: "Alumni Network",
      count: "5000+",
      description: "Successful graduates in top colleges and careers"
    }
  ];

  const floatingImages = [
    {
      src: achievement1,
      alt: "Students celebrating academic achievement",
      className: "absolute top-20 left-10 w-48 h-32 rounded-xl shadow-colored animate-float",
      delay: "0s"
    },
    {
      src: achievement2,
      alt: "Modern classroom with awards",
      className: "absolute top-32 right-16 w-56 h-36 rounded-xl shadow-colored animate-bounce-gentle",
      delay: "1s"
    },
    {
      src: achievement3,
      alt: "JNV entrance coaching success",
      className: "absolute bottom-24 left-20 w-52 h-34 rounded-xl shadow-colored animate-float",
      delay: "2s"
    }
  ];

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-rotate-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-accent-foreground">Achievements</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Celebrating milestones of excellence and student success stories that inspire us every day
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* School Building Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={schoolBuilding} 
                alt="Gayatri Foundation School Building"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary opacity-20" />
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Learning Campus</h3>
                  <p className="text-white/90">State-of-the-art facilities designed for holistic education</p>
                </Card>
              </div>
            </div>

            {/* Floating Achievement Images */}
            {floatingImages.map((image, index) => (
              <div 
                key={index}
                className={image.className}
                style={{ animationDelay: image.delay }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-primary opacity-10 rounded-xl" />
              </div>
            ))}
          </div>

          {/* Achievements Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-accent">{achievement.count}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-2">{achievement.title}</h4>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{achievement.description}</p>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-white/10 backdrop-blur-md border-white/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Ready to be Part of Our Success Story?</h3>
              <p className="text-primary-foreground/90 mb-6">
                Join thousands of successful students who have achieved their dreams with Gayatri Foundation. 
                Start your journey towards academic excellence today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" className="flex-1 group">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-white/30 text-primary-foreground hover:bg-white/10">
                  View Success Stories
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
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;