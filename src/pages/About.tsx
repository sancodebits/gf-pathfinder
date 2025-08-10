import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FounderDesk from "@/components/FounderDesk";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground font-poppins">{t('about.mission')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground font-poppins">{t('about.vision')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <FounderDesk />
      </main>
      <Footer />
    </div>
  );
};

export default About;