import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, Calendar, User, Briefcase } from 'lucide-react';

interface PersonalInfoProps {
  email?: string;
  phone?: string;
  website?: string;
  experience?: string;
  specialties?: string[];
  availability?: string;
}

export default function PersonalInfo({
  email = "[your.email@domain.com]",
  phone = "[+1 (555) 123-4567]",
  website = "[www.yourwebsite.com]",
  experience = "[5+ years]",
  specialties = ["[Specialty 1]", "[Specialty 2]", "[Specialty 3]", "[Specialty 4]"],
  availability = "[Available for new opportunities]"
}: PersonalInfoProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-section-title">
            Personal Information
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="hover-elevate border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary font-heading">
                <User className="w-5 h-5" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-foreground hover:text-primary justify-start"
                    onClick={() => console.log('Email contact clicked')}
                    data-testid="button-contact-email"
                  >
                    {email}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-foreground hover:text-primary justify-start"
                    onClick={() => console.log('Phone contact clicked')}
                    data-testid="button-contact-phone"
                  >
                    {phone}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-foreground hover:text-primary justify-start"
                    onClick={() => console.log('Website clicked')}
                    data-testid="button-contact-website"
                  >
                    {website}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="hover-elevate border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary font-heading">
                <Briefcase className="w-5 h-5" />
                Professional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <Calendar className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium" data-testid="text-experience">{experience}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Specialties</p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      data-testid={`badge-specialty-${index}`}
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Badge 
                  variant="outline" 
                  className="border-chart-2/50 text-chart-2 bg-chart-2/10"
                  data-testid="badge-availability"
                >
                  {availability}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}