import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, File, Image, Archive } from 'lucide-react';
import { useState } from 'react';

interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'image' | 'archive';
  size: string;
  description: string;
  downloadUrl?: string;
}

interface DocumentDownloadsProps {
  documents?: Document[];
}

const defaultDocuments: Document[] = [
  {
    id: '1',
    title: '[Resume/CV]',
    type: 'pdf',
    size: '[2.5 MB]',
    description: '[Latest professional resume with experience and qualifications]'
  },
  {
    id: '2', 
    title: '[Portfolio Document]',
    type: 'pdf',
    size: '[5.2 MB]',
    description: '[Comprehensive portfolio showcasing projects and achievements]'
  },
  {
    id: '3',
    title: '[Certifications]',
    type: 'archive',
    size: '[3.1 MB]',
    description: '[Collection of professional certifications and training certificates]'
  },
  {
    id: '4',
    title: '[Project Samples]',
    type: 'archive',
    size: '[12.8 MB]',
    description: '[Code samples and project demonstrations]'
  },
  {
    id: '5',
    title: '[Professional Headshots]',
    type: 'image',
    size: '[8.4 MB]',
    description: '[High-resolution professional photos for media use]'
  },
  {
    id: '6',
    title: '[References Letter]',
    type: 'doc',
    size: '[1.2 MB]',
    description: '[Professional references and recommendation letters]'
  }
];

const getFileIcon = (type: Document['type']) => {
  switch (type) {
    case 'pdf':
      return <FileText className="w-6 h-6" />;
    case 'doc':
      return <File className="w-6 h-6" />;
    case 'image':
      return <Image className="w-6 h-6" />;
    case 'archive':
      return <Archive className="w-6 h-6" />;
    default:
      return <File className="w-6 h-6" />;
  }
};

const getTypeColor = (type: Document['type']) => {
  switch (type) {
    case 'pdf':
      return 'bg-red-500/10 text-red-400 border-red-500/20';
    case 'doc':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'image':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'archive':
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    default:
      return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

export default function DocumentDownloads({ documents = defaultDocuments }: DocumentDownloadsProps) {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (document: Document) => {
    setDownloadingId(document.id);
    console.log(`Downloading: ${document.title}`);
    
    // Simulate download delay
    setTimeout(() => {
      setDownloadingId(null);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-downloads-title">
            Document Downloads
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access and download professional documents, portfolios, and resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((document, index) => (
            <Card 
              key={document.id} 
              className="hover-elevate border-primary/20 bg-card/50 backdrop-blur-sm group transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${getTypeColor(document.type)} group-hover:scale-110 transition-transform`}>
                    {getFileIcon(document.type)}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={getTypeColor(document.type)}
                    data-testid={`badge-file-type-${index}`}
                  >
                    {document.type.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-heading" data-testid={`text-document-title-${index}`}>
                  {document.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground" data-testid={`text-document-description-${index}`}>
                  {document.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground" data-testid={`text-document-size-${index}`}>
                    {document.size}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => handleDownload(document)}
                    disabled={downloadingId === document.id}
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    data-testid={`button-download-${index}`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {downloadingId === document.id ? 'Downloading...' : 'Download'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}