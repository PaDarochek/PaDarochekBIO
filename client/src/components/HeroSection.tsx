import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface HeroSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  profileImage?: string;
}

export default function HeroSection({
  name = "[Your Name]",
  title = "[Your Professional Title]", 
  bio = "[Your professional bio and summary goes here. This should be a compelling description of your expertise and background.]",
  location = "[Your Location]",
  profileImage
}: HeroSectionProps) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping && currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + name[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= name.length) {
      setIsTyping(false);
    }
  }, [currentIndex, name, isTyping]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-chart-2 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-chart-2/50 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-chart-2 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted to-accent flex items-center justify-center text-4xl font-heading text-muted-foreground">
                    {name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Typed Name */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-name">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Title */}
          <div className="mb-6">
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary/50 text-primary bg-primary/10 hover-elevate" data-testid="badge-title">
              {title}
            </Badge>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span data-testid="text-location">{location}</span>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-bio">
            {bio}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => console.log('Email clicked')}
              data-testid="button-email"
            >
              <Mail className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => console.log('LinkedIn clicked')}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => console.log('GitHub clicked')}
              data-testid="button-github"
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-primary/20 rotate-45 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-chart-2/20 rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
}