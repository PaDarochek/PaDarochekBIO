import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText, Award, Newspaper, BookOpen, Trophy } from 'lucide-react';
import { useState } from 'react';

interface Achievement {
  id: string;
  title: string;
  type: 'article' | 'publication' | 'award' | 'certification' | 'project' | 'patent';
  description: string;
  date: string;
  url?: string;
  organization?: string;
  status?: 'published' | 'in-review' | 'completed';
}

interface AchievementsGridProps {
  achievements?: Achievement[];
}

const defaultAchievements: Achievement[] = [
  {
    id: '1',
    title: '[Article Title]',
    type: 'article',
    description: '[Brief description of the article content, key insights, and impact on the field]',
    date: '[Publication Date]',
    url: '[https://link-to-article.com]',
    organization: '[Publication Name]',
    status: 'published'
  },
  {
    id: '2',
    title: '[Research Publication]',
    type: 'publication',
    description: '[Description of research work, methodology, and findings]',
    date: '[Publication Date]',
    url: '[https://link-to-publication.com]',
    organization: '[Journal/Conference Name]',
    status: 'published'
  },
  {
    id: '3',
    title: '[Award/Recognition Title]',
    type: 'award',
    description: '[Description of the award, criteria, and significance in your field]',
    date: '[Award Date]',
    organization: '[Awarding Organization]',
    status: 'completed'
  },
  {
    id: '4',
    title: '[Professional Certification]',
    type: 'certification',
    description: '[Description of certification requirements and professional value]',
    date: '[Certification Date]',
    url: '[https://certification-link.com]',
    organization: '[Certifying Body]',
    status: 'completed'
  },
  {
    id: '5',
    title: '[Major Project]',
    type: 'project',
    description: '[Description of project scope, technologies used, and business impact]',
    date: '[Completion Date]',
    url: '[https://project-demo.com]',
    status: 'completed'
  },
  {
    id: '6',
    title: '[Patent/IP]',
    type: 'patent',
    description: '[Description of innovation, technical details, and potential applications]',
    date: '[Filing/Grant Date]',
    organization: '[Patent Office]',
    status: 'in-review'
  }
];

const getTypeIcon = (type: Achievement['type']) => {
  switch (type) {
    case 'article':
      return <Newspaper className="w-5 h-5" />;
    case 'publication':
      return <BookOpen className="w-5 h-5" />;
    case 'award':
      return <Trophy className="w-5 h-5" />;
    case 'certification':
      return <Award className="w-5 h-5" />;
    case 'project':
      return <FileText className="w-5 h-5" />;
    case 'patent':
      return <FileText className="w-5 h-5" />;
    default:
      return <FileText className="w-5 h-5" />;
  }
};

const getTypeColor = (type: Achievement['type']) => {
  switch (type) {
    case 'article':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'publication':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'award':
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    case 'certification':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'project':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    case 'patent':
      return 'bg-red-500/10 text-red-400 border-red-500/20';
    default:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

const getStatusColor = (status: Achievement['status']) => {
  switch (status) {
    case 'published':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'in-review':
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    case 'completed':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    default:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

export default function AchievementsGrid({ achievements = defaultAchievements }: AchievementsGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleReadMore = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    console.log(`Expanded achievement: ${id}`);
  };

  const handleExternalLink = (url: string, title: string) => {
    console.log(`Opening external link: ${url} for ${title}`);
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-achievements-title">
            Achievements & Publications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional accomplishments, publications, and recognition in the field
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id} 
              className="hover-elevate border-primary/20 bg-card/50 backdrop-blur-sm group transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-lg ${getTypeColor(achievement.type)} group-hover:scale-110 transition-transform`}>
                    {getTypeIcon(achievement.type)}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge 
                      variant="outline" 
                      className={getTypeColor(achievement.type)}
                      data-testid={`badge-type-${index}`}
                    >
                      {achievement.type}
                    </Badge>
                    {achievement.status && (
                      <Badge 
                        variant="outline" 
                        className={getStatusColor(achievement.status)}
                        data-testid={`badge-status-${index}`}
                      >
                        {achievement.status}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg font-heading leading-tight" data-testid={`text-achievement-title-${index}`}>
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-xs text-muted-foreground flex items-center justify-between">
                  <span data-testid={`text-achievement-date-${index}`}>{achievement.date}</span>
                  {achievement.organization && (
                    <span data-testid={`text-achievement-org-${index}`}>{achievement.organization}</span>
                  )}
                </div>

                <p 
                  className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                    expandedId === achievement.id ? '' : 'line-clamp-3'
                  }`}
                  data-testid={`text-achievement-description-${index}`}
                >
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleReadMore(achievement.id)}
                    className="text-primary hover:text-primary/80 p-0 h-auto"
                    data-testid={`button-read-more-${index}`}
                  >
                    {expandedId === achievement.id ? 'Show Less' : 'Read More'}
                  </Button>

                  {achievement.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExternalLink(achievement.url!, achievement.title)}
                      className="border-primary/20 text-primary hover:bg-primary/10"
                      data-testid={`button-external-link-${index}`}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}