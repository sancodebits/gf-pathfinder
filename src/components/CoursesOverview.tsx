import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, GraduationCap, Target, ArrowRight } from "lucide-react";

const CoursesOverview = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Foundation Classes",
      subtitle: "Class 6-8",
      description: "Building strong academic fundamentals with interactive learning methods and concept clarity.",
      features: ["Interactive Learning", "Concept Building", "Regular Assessments"],
      color: "bg-gradient-primary"
    },
    {
      icon: Brain,
      title: "Board Focused",
      subtitle: "Class 9-10",
      description: "Comprehensive preparation for board exams with strategic study plans and practice tests.",
      features: ["Board Exam Prep", "Question Banks", "Mock Tests"],
      color: "bg-gradient-secondary"
    },
    {
      icon: GraduationCap,
      title: "Career Streams",
      subtitle: "Class 11-12",
      description: "Specialized coaching for Science, Commerce & Arts with career guidance and competitive exam prep.",
      features: ["Stream Specialization", "Career Guidance", "Competitive Prep"],
      color: "bg-gradient-accent"
    },
    {
      icon: Target,
      title: "JNV Entrance",
      subtitle: "Navodaya Coaching",
      description: "Dedicated coaching for Jawahar Navodaya Vidyalaya entrance exam with proven success strategies.",
      features: ["Specialized Curriculum", "Mock Tests", "Success Tracking"],
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational programs designed to excel in academics and competitive examinations
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="p-6">
                {/* Icon & Title */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${course.color} rounded-xl mb-4`}>
                  <course.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-primary font-medium mb-3">{course.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8 py-4">
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesOverview;