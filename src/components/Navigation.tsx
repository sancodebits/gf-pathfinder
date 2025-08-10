import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import EnrollmentModal from "@/components/EnrollmentModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.courses'), path: "/courses" },
    { name: t('nav.enquiry'), path: "/enquiry" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
    { name: t('nav.news'), path: "/news" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <AnimatedLogo className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground font-poppins">Gayatri Foundation</h1>
              <p className="text-xs text-muted-foreground font-medium">{t('nav.excellence')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary hover:bg-primary/10"
              onClick={() => {
                const chatBot = document.querySelector('[data-chat-bot]');
                if (chatBot) {
                  chatBot.scrollIntoView({ behavior: 'smooth' });
                  // Trigger chatbot opening on mobile
                  const chatButton = chatBot.querySelector('button');
                  if (chatButton && window.innerWidth <= 768) {
                    chatButton.click();
                  }
                }
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('nav.chat')}
            </Button>
            <Button 
              variant="hero" 
              size="sm" 
              className="shadow-colored"
              onClick={() => setIsEnrollmentOpen(true)}
            >
              {t('nav.enroll')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSwitcher />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary justify-start"
                  onClick={() => {
                    const chatBot = document.querySelector('[data-chat-bot]');
                    if (chatBot) {
                      chatBot.scrollIntoView({ behavior: 'smooth' });
                      // Trigger chatbot opening on mobile
                      const chatButton = chatBot.querySelector('button');
                      if (chatButton) {
                        chatButton.click();
                      }
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('nav.chat')}
                </Button>
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => {
                    setIsEnrollmentOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.enroll')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <EnrollmentModal 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;