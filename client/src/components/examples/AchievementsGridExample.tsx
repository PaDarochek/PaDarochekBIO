import AchievementsGrid from '../AchievementsGrid';

const sampleAchievements = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    type: 'article' as const,
    description: 'In-depth article covering best practices for building large-scale React applications with TypeScript, covering architecture patterns and performance optimization techniques.',
    date: 'March 2024',
    url: 'https://medium.com/@alexthompson/building-scalable-react-apps',
    organization: 'Medium',
    status: 'published' as const
  },
  {
    id: '2',
    title: 'Microservices Design Patterns Research',
    type: 'publication' as const,
    description: 'Research paper on distributed system design patterns for microservices architecture, published in the International Conference on Software Engineering.',
    date: 'January 2024',
    url: 'https://ieeexplore.ieee.org/document/12345',
    organization: 'IEEE ICSE 2024',
    status: 'published' as const
  },
  {
    id: '3',
    title: 'Tech Innovation Award',
    type: 'award' as const,
    description: 'Recognized for outstanding contribution to open-source software development and mentorship in the developer community.',
    date: 'December 2023',
    organization: 'Developer Community Awards',
    status: 'completed' as const
  }
];

export default function AchievementsGridExample() {
  return <AchievementsGrid achievements={sampleAchievements} />;
}