import PersonalInfo from '../PersonalInfo';

export default function PersonalInfoExample() {
  return (
    <PersonalInfo
      email="alex.thompson@email.com"
      phone="+1 (555) 123-4567"
      website="www.alexthompson.dev"
      experience="7+ years"
      specialties={["React", "Node.js", "TypeScript", "AWS", "Team Leadership"]}
      availability="Available for new opportunities"
    />
  );
}