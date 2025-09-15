import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, ChevronUp } from 'lucide-react';
import HeroSection from './HeroSection';
import PersonalInfo from './PersonalInfo';
import DocumentDownloads from './DocumentDownloads';
import EducationTimeline from './EducationTimeline';
import AchievementsGrid from './AchievementsGrid';

export default function BioTemplate() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(`Theme changed to: ${!isDarkMode ? 'dark' : 'light'}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolled to top');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to section: ${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            BIO Template
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-primary"
              data-testid="nav-home"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('personal')}
              className="text-muted-foreground hover:text-primary"
              data-testid="nav-personal"
            >
              Personal
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('documents')}
              className="text-muted-foreground hover:text-primary"
              data-testid="nav-documents"
            >
              Documents
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('education')}
              className="text-muted-foreground hover:text-primary"
              data-testid="nav-education"
            >
              Education
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('achievements')}
              className="text-muted-foreground hover:text-primary"
              data-testid="nav-achievements"
            >
              Achievements
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="border-primary/20 hover:bg-primary/10"
            data-testid="button-theme-toggle"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="personal">
          <PersonalInfo />
        </div>
        
        <div id="documents">
          <DocumentDownloads />
        </div>
        
        <div id="education">
          <EducationTimeline />
        </div>
        
        <div id="achievements">
          <AchievementsGrid />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-gradient-to-r from-background to-card/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="font-heading font-bold text-2xl mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Futuristic BIO Template
          </div>
          <p className="text-muted-foreground mb-6">
            A modern, customizable template for showcasing your professional profile
          </p>
          <div className="text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary/20 hover:bg-primary/30 border-primary/50"
          data-testid="button-scroll-top"
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}