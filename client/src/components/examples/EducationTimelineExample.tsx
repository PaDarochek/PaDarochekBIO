import EducationTimeline from '../EducationTimeline';

const sampleEducation = [
  {
    id: '1',
    institution: 'Stanford University',
    degree: 'Master of Science',
    field: 'Computer Science',
    startYear: '2019',
    endYear: '2021',
    location: 'Stanford, CA',
    description: 'Specialized in distributed systems and machine learning. Completed thesis on scalable microservices architecture.',
    achievements: ['Graduated Summa Cum Laude', 'Teaching Assistant for CS106A', 'Published research paper'],
    gpa: '3.9/4.0'
  },
  {
    id: '2',
    institution: 'UC Berkeley',
    degree: 'Bachelor of Science',
    field: 'Electrical Engineering & Computer Science',
    startYear: '2015',
    endYear: '2019',
    location: 'Berkeley, CA',
    description: 'Strong foundation in algorithms, data structures, and software engineering principles.',
    achievements: ['Dean\'s List - 6 semesters', 'Hackathon Winner - Cal Hacks 2018']
  }
];

export default function EducationTimelineExample() {
  return <EducationTimeline education={sampleEducation} />;
}