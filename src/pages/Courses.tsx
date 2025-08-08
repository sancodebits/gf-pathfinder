import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, GraduationCap, Target, Clock, Users, CheckCircle } from "lucide-react";

const Courses = () => {
  const courseDetails = [
    {
      icon: BookOpen,
      title: "Foundation Classes",
      subtitle: "Class 6-8",
      description: "Strong foundation building with concept clarity and interactive learning methods.",
      duration: "1 Year Program",
      students: "500+ Students",
      features: [
        "Interactive Learning Methods",
        "Concept Building Focus",
        "Regular Assessment Tests",
        "Doubt Clearing Sessions",
        "Study Material Included",
        "Progress Tracking"
      ],
      color: "bg-gradient-primary",
      fee: "₹15,000/year"
    },
    {
      icon: Brain,
      title: "Board Focused Program",
      subtitle: "Class 9-10",
      description: "Comprehensive board exam preparation with strategic study plans and practice tests.",
      duration: "2 Year Program",
      students: "800+ Students",
      features: [
        "Board Exam Strategy",
        "Previous Year Papers",
        "Mock Test Series",
        "Subject-wise Expert Faculty",
        "Time Management Training",
        "Performance Analytics"
      ],
      color: "bg-gradient-secondary",
      fee: "₹20,000/year"
    },
    {
      icon: GraduationCap,
      title: "Career Stream Specialization",
      subtitle: "Class 11-12",
      description: "Specialized coaching for Science, Commerce & Arts with competitive exam preparation.",
      duration: "2 Year Program",
      students: "600+ Students",
      features: [
        "Stream-specific Curriculum",
        "Competitive Exam Prep",
        "Career Guidance Counseling",
        "College Admission Support",
        "Industry Expert Sessions",
        "Scholarship Opportunities"
      ],
      color: "bg-gradient-accent",
      fee: "₹25,000/year"
    },
    {
      icon: Target,
      title: "JNV Entrance Coaching",
      subtitle: "Navodaya Vidyalaya",
      description: "Specialized coaching for Jawahar Navodaya Vidyalaya entrance with proven strategies.",
      duration: "6-12 Months",
      students: "300+ Students",
      features: [
        "JNV-specific Curriculum",
        "Mental Ability Training",
        "Language Test Preparation",
        "Mock Test Series",
        "Success Tracking System",
        "Interview Preparation"
      ],
      color: "bg-gradient-primary",
      fee: "₹18,000/program"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            <span className="text-gradient-primary">Our</span> <span className="bg-gradient-accent bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive educational programs designed for academic excellence and competitive success
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseDetails.map((course, index) => (
              <Card key={index} className="p-8 hover:shadow-strong transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${course.color} rounded-xl flex items-center justify-center`}>
                      <course.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{course.title}</h3>
                      <p className="text-primary font-semibold">{course.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{course.fee}</div>
                    <div className="text-sm text-muted-foreground">Starting from</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-secondary" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    {course.students}
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex space-x-4">
                  <Button variant="hero" className="flex-1">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Download Syllabus
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-muted/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Gayatri Foundation?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-muted-foreground">Students Taught</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;