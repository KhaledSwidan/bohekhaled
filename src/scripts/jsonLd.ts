// scripts/jsonLd.ts
export const websiteUrl = 'https://bohekhaled.vercel.app';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Khaled Swidan',
  url: websiteUrl,
  image: `${websiteUrl}/og-image.jpg`,
  jobTitle: 'Frontend Developer',
  description:
    'Skilled Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  email: 'khaledqutb4@gmail.com',
  telephone: '+01111988998', // Optional
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alexandria',
    addressRegion: 'Alexandria',
    addressCountry: 'Egypt',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Bibliotheca Alexandrina / Freelancer',
    url: websiteUrl,
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Faculty of Science, Alexandria University',
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Node.js',
    'Frontend Development',
    'Web Development',
    'User Interface Design',
    'User Experience Design',
  ],
  sameAs: [
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourusername',
    'https://twitter.com/yourusername',
    'https://behance.net/yourusername', // Optional
    'https://dribbble.com/yourusername', // Optional
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': websiteUrl,
  },
  potentialAction: {
    '@type': 'ContactAction',
    target: `${websiteUrl}#contact`,
    name: 'Contact',
  },
};

// ✅ Additional Schema for Portfolio/Creative Work
export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Khaled Swidan - Portfolio',
  description: 'A showcase of frontend development projects and skills',
  author: {
    '@type': 'Person',
    name: 'Khaled Swidan',
  },
  url: websiteUrl,
  image: `${websiteUrl}/og-image.jpg`,
  dateCreated: '2024-01-01', // Update with actual date
  dateModified: new Date().toISOString().split('T')[0],
  genre: 'Web Development Portfolio',
  keywords:
    'frontend developer, react, next.js, portfolio, typescript, web development',
};

// ✅ Schema for Website
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Your Name - Portfolio',
  url: websiteUrl,
  description: 'Professional portfolio of a skilled Frontend Developer',
  author: {
    '@type': 'Person',
    name: 'Khaled Swidan',
  },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    '@type': 'Person',
    name: 'Khaled Swidan',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${websiteUrl}?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};
