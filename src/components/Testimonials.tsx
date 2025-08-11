import React from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      class: "Class 10 Graduate",
      achievement: "JNV Qualified",
      content: "Gayatri Foundation's coaching helped me clear JNV entrance with flying colors. The teachers are excellent and the study material is comprehensive.",
      rating: 5,
      image: "🎓"
    },
    {
      name: "Rahul Kumar",
      class: "Class 12 Graduate", 
      achievement: "95% in Boards",
      content: "The personalized attention and strategic approach at Gayatri Foundation helped me score 95% in my board exams. Highly recommended!",
      rating: 5,
      image: "🏆"
    },
    {
      name: "Anjali Patel",
      class: "Class 9 Student",
      achievement: "Academic Excellence",
      content: "The foundation building program here is amazing. My concepts are now crystal clear and I feel confident about my studies.",
      rating: 5,
      image: "⭐"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success <span className="text-foreground">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful students who achieved their academic dreams with Gayatri Foundation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              {/* Student Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                  <p className="text-sm text-foreground font-medium">{testimonial.achievement}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          {[
            { value: "2000+", label: "Students Enrolled" },
            { value: "95%", label: "Success Rate" },
            { value: "15+", label: "Courses Offered" },
            { value: "5+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;