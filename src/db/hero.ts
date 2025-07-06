export const titles = [
  'Frontend Developer',
  'React.js Specialist',
  'TypeScript Expert',
  'UI/UX Enthusiast',
];

export const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
};
