export const mockHomeData = {
  hero: {
    slides: [
      {
        title: 'Preserving African Heritage',
        subtitle: 'Digital archive of cultural treasures',
        image: 'https://readdy.ai/api/search-image?query=African%20cultural%20heritage%20museum%20artifacts%20displayed%20in%20modern%20minimalist%20gallery%20space%20with%20warm%20ambient%20lighting%20and%20traditional%20patterns%20subtle%20background%20elements&width=1920&height=1080&seq=hero1&orientation=landscape',
      },
      {
        title: 'Stories That Matter',
        subtitle: 'Connecting past and future',
        image: 'https://readdy.ai/api/search-image?query=African%20storytelling%20tradition%20modern%20digital%20interpretation%20with%20warm%20earth%20tones%20minimalist%20composition%20cultural%20symbols%20and%20contemporary%20design%20elements&width=1920&height=1080&seq=hero2&orientation=landscape',
      },
    ],
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
  },
  services: {
    title: 'Our Services',
    button: { text: 'View All Services', link: '/services' },
    cards: [
      {
        icon: 'archive',
        title: 'Digital Archiving',
        description: 'Preserve cultural artifacts digitally',
      },
      {
        icon: 'book',
        title: 'Research Support',
        description: 'Access to historical resources',
      },
      {
        icon: 'users',
        title: 'Community Programs',
        description: 'Educational workshops and events',
      },
    ],
  },
  about: {
    title: 'About Sankofa Vault',
    description: 'We are dedicated to preserving and sharing African cultural heritage through modern technology.',
    stats: [
      { label: 'Artifacts', value: '5000+' },
      { label: 'Years of History', value: '500+' },
      { label: 'Community Members', value: '10K+' },
    ],
  },
  marquee: [
    'Cultural Preservation',
    'Digital Heritage',
    'Community Engagement',
    'Historical Research',
  ],
};

export const mockCommonData = {
  header: {
    logo: 'https://static.readdy.ai/image/12afcc28f12d5c500713622508071ed6/e6b1b7dcc3eb309bfbc5a34d73bba73a.png',
    navigation: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Team', path: '/team' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  footer: {
    contact: {
      email: 'info@sankofavault.org',
      phone: '+1 (555) 123-4567',
      address: '123 Heritage Lane, Cultural District',
    },
    locations: [
      { city: 'New York', address: '123 Main St' },
      { city: 'London', address: '456 High St' },
    ],
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  sponsors: [
    { name: 'Sponsor 1', logo: 'https://readdy.ai/api/search-image?query=corporate%20logo%20minimalist%20design%20clean%20simple%20geometric%20shapes%20professional%20branding&width=200&height=100&seq=sponsor1&orientation=landscape' },
    { name: 'Sponsor 2', logo: 'https://readdy.ai/api/search-image?query=modern%20company%20logo%20abstract%20minimalist%20professional%20clean%20design%20business%20branding&width=200&height=100&seq=sponsor2&orientation=landscape' },
  ],
};

export const mockTeamData = {
  members: [
    {
      name: 'Dr. Amara Johnson',
      role: 'Director',
      bio: 'Cultural heritage expert with 20 years of experience',
      image: 'https://readdy.ai/api/search-image?query=professional%20African%20American%20woman%20director%20confident%20smile%20business%20attire%20warm%20lighting%20studio%20portrait&width=400&height=500&seq=team1&orientation=portrait',
      social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    },
    {
      name: 'Kwame Osei',
      role: 'Lead Archivist',
      bio: 'Specialist in digital preservation',
      image: 'https://readdy.ai/api/search-image?query=professional%20African%20man%20archivist%20friendly%20expression%20business%20casual%20attire%20natural%20lighting%20studio%20portrait&width=400&height=500&seq=team2&orientation=portrait',
      social: { linkedin: 'https://linkedin.com' },
    },
  ],
};

export const mockPortfolioData = {
  projects: [
    {
      title: 'Ancient Manuscripts Project',
      description: 'Digitization of 500-year-old manuscripts',
      image: 'https://readdy.ai/api/search-image?query=ancient%20African%20manuscripts%20historical%20documents%20preservation%20digital%20scanning%20process%20clean%20modern%20workspace&width=600&height=400&seq=portfolio1&orientation=landscape',
      categories: ['Archiving', 'Research'],
      date: '2024',
    },
    {
      title: 'Community Oral History',
      description: 'Recording and preserving community stories',
      image: 'https://readdy.ai/api/search-image?query=community%20storytelling%20oral%20history%20recording%20session%20warm%20intimate%20setting%20cultural%20preservation%20modern%20equipment&width=600&height=400&seq=portfolio2&orientation=landscape',
      categories: ['Community', 'Education'],
      date: '2023',
    },
  ],
};

export const mockServicesData = {
  services: [
    {
      title: 'Digital Archiving',
      description: 'Professional digitization of cultural artifacts',
      features: ['High-resolution scanning', '3D modeling', 'Metadata cataloging'],
      icon: 'archive',
    },
    {
      title: 'Research Access',
      description: 'Comprehensive database for researchers',
      features: ['Online portal', 'Advanced search', 'Citation tools'],
      icon: 'search',
    },
  ],
};

export const mockContactData = {
  info: {
    email: 'info@sankofavault.org',
    phone: '+1 (555) 123-4567',
    address: '123 Heritage Lane, Cultural District, NY 10001',
    hours: 'Mon-Fri: 9AM-5PM',
  },
  form: {
    nameLabel: 'Your Name',
    emailLabel: 'Email Address',
    messageLabel: 'Message',
    submitButton: 'Send Message',
  },
};
