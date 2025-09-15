import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  description: string;
  achievements?: string[];
  gpa?: string;
}

interface EducationTimelineProps {
  education?: EducationItem[];
}

const defaultEducation: EducationItem[] = [
  {
    id: '1',
    institution: '[University/Institution Name]',
    degree: '[Degree Type]',
    field: '[Field of Study]',
    startYear: '[Start Year]',
    endYear: '[End Year]',
    location: '[City, Country]',
    description: '[Brief description of your studies, focus areas, and key learnings]',
    achievements: ['[Achievement 1]', '[Achievement 2]', '[Achievement 3]'],
    gpa: '[GPA if relevant]'
  },
  {
    id: '2',
    institution: '[Previous Institution]',
    degree: '[Previous Degree]',
    field: '[Previous Field]',
    startYear: '[Start Year]',
    endYear: '[End Year]',
    location: '[City, Country]',
    description: '[Description of previous education and accomplishments]',
    achievements: ['[Achievement 1]', '[Achievement 2]']
  },
  {
    id: '3',
    institution: '[Certification/Training Institution]',
    degree: '[Certificate/Training]',
    field: '[Specialization Area]',
    startYear: '[Year]',
    endYear: '[Year]',
    location: '[Online/City]',
    description: '[Description of specialized training or certification program]'
  }
];

export default function EducationTimeline({ education = defaultEducation }: EducationTimelineProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-education-title">
            Education & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional development journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-primary opacity-30"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline node */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-chart-2 rounded-full animate-glow border-2 border-background"></div>
                
                {/* Content card */}
                <div className="ml-20">
                  <Card className="hover-elevate border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <GraduationCap className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-lg" data-testid={`text-institution-${index}`}>
                              {item.institution}
                            </h3>
                            <p className="text-primary font-medium" data-testid={`text-degree-${index}`}>
                              {item.degree} in {item.field}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Badge 
                            variant="outline" 
                            className="border-chart-2/50 text-chart-2 bg-chart-2/10"
                            data-testid={`badge-duration-${index}`}
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.startYear} - {item.endYear}
                          </Badge>
                          <Badge 
                            variant="secondary" 
                            className="bg-muted/50"
                            data-testid={`badge-location-${index}`}
                          >
                            <MapPin className="w-3 h-3 mr-1" />
                            {item.location}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4" data-testid={`text-description-${index}`}>
                        {item.description}
                      </p>

                      {/* GPA */}
                      {item.gpa && (
                        <div className="mb-4">
                          <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                            GPA: {item.gpa}
                          </Badge>
                        </div>
                      )}

                      {/* Achievements */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-4 h-4 text-chart-2" />
                            <span className="text-sm font-medium text-chart-2">Key Achievements</span>
                          </div>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <div 
                                key={achievementIndex} 
                                className="flex items-start gap-2"
                                data-testid={`text-achievement-${index}-${achievementIndex}`}
                              >
                                <div className="w-2 h-2 bg-chart-2 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}