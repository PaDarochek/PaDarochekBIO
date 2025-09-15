import DocumentDownloads from '../DocumentDownloads';

const sampleDocuments = [
  {
    id: '1',
    title: 'Resume - Alex Thompson',
    type: 'pdf' as const,
    size: '2.5 MB',
    description: 'Latest professional resume with experience and qualifications'
  },
  {
    id: '2', 
    title: 'Portfolio Collection',
    type: 'pdf' as const,
    size: '5.2 MB',
    description: 'Comprehensive portfolio showcasing recent projects and achievements'
  },
  {
    id: '3',
    title: 'Certifications Archive',
    type: 'archive' as const,
    size: '3.1 MB',
    description: 'Collection of professional certifications and training certificates'
  }
];

export default function DocumentDownloadsExample() {
  return <DocumentDownloads documents={sampleDocuments} />;
}