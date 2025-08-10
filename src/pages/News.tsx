import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();

  const newsArticles = [
    {
      id: 1,
      title: t('news.article1.title'),
      excerpt: t('news.article1.excerpt'),
      date: "2024-01-15",
      author: "Dr. Rajesh Kumar Sharma",
      category: t('news.categories.achievement'),
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: t('news.article2.title'),
      excerpt: t('news.article2.excerpt'),
      date: "2024-01-10",
      author: "Mrs. Priya Sharma",
      category: t('news.categories.announcement'),
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: t('news.article3.title'),
      excerpt: t('news.article3.excerpt'),
      date: "2024-01-05",
      author: "Mr. Amit Patel",
      category: t('news.categories.event'),
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              {t('news.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('news.subtitle')}
            </p>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-medium transition-all duration-300">
                  <div className="aspect-video bg-gradient-primary opacity-20"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 font-poppins line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <Button variant="ghost" size="sm">
                        {t('news.readMore')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;