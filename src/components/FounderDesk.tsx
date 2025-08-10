import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Linkedin, Mail, Award } from "lucide-react";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";
import cofounder1 from "@/assets/cofounder1.jpg";
import cofounder2 from "@/assets/cofounder2.jpg";

const FounderDesk = () => {
  const leadership = [
    {
      image: founder1,
      name: "Dr. Rajesh Kumar Sharma",
      designation: "Founder & Chairman",
      qualification: "Ph.D in Education, M.A. English",
      experience: "20+ Years in Educational Leadership",
      message: "Education is the foundation of a progressive society. At Gayatri Foundation, we are committed to nurturing young minds and helping them achieve their fullest potential.",
      achievements: ["Former Principal, Government School", "Published Educational Researcher", "Mentor to 5000+ Students"],
      email: "rajesh@gayatrifoundation.edu",
      linkedin: "#"
    },
    {
      image: founder2,
      name: "Mrs. Priya Sharma",
      designation: "Founder & Director",
      qualification: "M.Ed, B.Ed, M.A. Mathematics", 
      experience: "18+ Years in Academic Excellence",
      message: "Every child deserves quality education. Our mission is to provide comprehensive learning that shapes character and builds competence for the future.",
      achievements: ["Mathematics Expert & Curriculum Designer", "JNV Entrance Specialist", "Award-winning Educator"],
      email: "priya@gayatrifoundation.edu",
      linkedin: "#"
    },
    {
      image: cofounder1,
      name: "Mr. Amit Patel",
      designation: "Co-Founder & Academic Head",
      qualification: "M.Sc Physics, B.Ed",
      experience: "12+ Years in Science Education",
      message: "Innovation in teaching methods and personalized attention are key to student success. We believe in making learning engaging and effective.",
      achievements: ["Science Department Head", "Technology Integration Expert", "Student Mentor"],
      email: "amit@gayatrifoundation.edu",
      linkedin: "#"
    },
    {
      image: cofounder2,
      name: "Ms. Anita Singh",
      designation: "Co-Founder & Operations Director",
      qualification: "MBA Education Management, M.A. Hindi",
      experience: "10+ Years in Educational Operations",
      message: "Efficient operations and student-centric approach ensure that every learner receives the support they need to excel academically.",
      achievements: ["Operations Excellence Award", "Student Welfare Advocate", "Process Optimization Expert"],
      email: "anita@gayatrifoundation.edu",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            Meet Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated educators and visionaries committed to providing exceptional educational experiences
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {leadership.map((leader, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-300 group">
              <div className="relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5" />
                
                <div className="relative p-8">
                  {/* Leader Image & Info */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                    <div className="relative">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-32 h-32 rounded-xl object-cover shadow-medium"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-accent-foreground" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1 font-poppins">{leader.name}</h3>
                      <p className="text-primary font-semibold mb-2">{leader.designation}</p>
                      <p className="text-sm text-muted-foreground mb-2">{leader.qualification}</p>
                      <p className="text-sm text-accent font-medium">{leader.experience}</p>
                      
                      {/* Contact Icons */}
                      <div className="flex justify-center md:justify-start gap-3 mt-4">
                        <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-primary">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-primary">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      "{leader.message}"
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 font-poppins">Key Achievements</h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <Card className="p-8 bg-gradient-secondary text-center">
          <h3 className="text-2xl font-bold mb-4 font-poppins text-foreground">Our Collective Vision</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-foreground">
            Together, we envision an educational ecosystem where every student is empowered with knowledge, 
            skills, and values to become responsible global citizens. Our combined experience of over 60 years 
            in education drives our commitment to excellence and innovation in learning.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">60+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">10,000+</div>
              <div className="text-sm text-muted-foreground">Students Mentored</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">15+</div>
              <div className="text-sm text-muted-foreground">Awards & Recognition</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">100%</div>
              <div className="text-sm text-muted-foreground">Dedication to Excellence</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FounderDesk;