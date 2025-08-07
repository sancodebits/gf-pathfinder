import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const classes = [
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
    "Class 11 Science", "Class 11 Commerce", "Class 11 Arts",
    "Class 12 Science", "Class 12 Commerce", "Class 12 Arts",
    "JNV Entrance Preparation"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Enquiry Submitted Successfully!",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Get in <span className="text-accent-foreground">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have questions about our courses? Ready to start your academic journey? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Class/Course of Interest *</Label>
                    <Select value={formData.class} onValueChange={(value) => handleInputChange("class", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class/course" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls) => (
                          <SelectItem key={cls} value={cls}>
                            {cls}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements, questions, or any specific needs..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@gayatrifoundation.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        123 Education Street,<br />
                        Learning District,<br />
                        Academic City - 110001
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary text-secondary-foreground">
                <h3 className="text-xl font-bold mb-4">Why Students Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    "Expert faculty with proven track record",
                    "Comprehensive study materials included",
                    "Regular progress tracking and feedback",
                    "Small batch sizes for personalized attention",
                    "Free doubt clearing sessions",
                    "95% success rate in board exams"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Response Guarantee</h3>
                <p className="text-muted-foreground mb-4">
                  We typically respond to all enquiries within 2-4 hours during business hours.
                </p>
                <div className="flex items-center justify-center space-x-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">24/7 Support Available</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;