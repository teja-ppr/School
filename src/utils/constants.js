// PLACEHOLDER CONSTANTS - Update these with actual school information

export const SCHOOL_INFO = {
  name: '[School Name]',
  affiliation: '[Affiliation Number]',
  code: '[School Code]',
  address: '[School Address], [City], [State] [Postal Code]',
  phone: '[Contact Number]',
  email: '[Email Address]',
  website: 'https://www.example.com',
  logo: '/images/logo/school-logo.png',
  establishedYear: 'YYYY',
};

export const PRINCIPAL_INFO = {
  name: '[Principal Name]',
  qualification: '[Qualification]',
  experience: '[Years] years',
  image: '/images/team/principal.jpg',
  message: 'A warm welcome to our school website. At [School Name], we are committed to providing quality education...',
};

export const CHAIRMAN_INFO = {
  name: '[Chairman Name]',
  designation: 'Chairman',
  image: '/images/team/chairman.jpg',
  message: 'Welcome to [School Name]. We believe in holistic development of our students...',
};

export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://instagram.com/',
  youtube: 'https://youtube.com/',
  linkedin: 'https://linkedin.com/',
};

export const NAVIGATION_MENU = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Academics',
    submenu: [
      { label: 'Curriculum', path: '/academics#curriculum' },
      { label: 'Academic Calendar', path: '/academic-calendar' },
      { label: 'Results', path: '/academics#results' },
    ],
  },
  {
    label: 'Admissions',
    submenu: [
      { label: 'Overview', path: '/admissions' },
      { label: 'Online Form', path: '/admissions#form' },
      { label: 'Eligibility', path: '/admissions#eligibility' },
    ],
  },
  {
    label: 'Campus',
    submenu: [
      { label: 'Infrastructure', path: '/infrastructure' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Student Life', path: '/student-life' },
    ],
  },
  {
    label: 'Parent Zone',
    submenu: [
      { label: 'Parent Portal', path: '/parents-corner' },
      { label: 'Policies', path: '/parents-corner#policies' },
      { label: 'Resources', path: '/parents-corner#resources' },
    ],
  },
  { label: 'CBSE Guidelines', path: '/cbse-guidelines' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'Contact', path: '/contact' },
  { label: 'Careers', path: '/careers' },
];

export const QUICK_LINKS = [
  { label: 'Admissions', path: '/admissions' },
  { label: 'Academic Calendar', path: '/academic-calendar' },
  { label: 'Parent Portal', path: '/parents-corner' },
  { label: 'Download Forms', path: '/downloads' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Alumni', path: '/alumni' },
];

export const FOOTER_LINKS = {
  about: [
    { label: 'About Us', path: '/about' },
    { label: 'History', path: '/about#history' },
    { label: 'Vision & Mission', path: '/about#vision' },
    { label: 'Management', path: '/about#management' },
  ],
  academics: [
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Academic Calendar', path: '/academic-calendar' },
    { label: 'CBSE Guidelines', path: '/cbse-guidelines' },
  ],
  campus: [
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Student Life', path: '/student-life' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Careers', path: '/careers' },
  ],
  info: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Parent Zone', path: '/parents-corner' },
    { label: 'Alumni', path: '/alumni' },
  ],
};

export const ACADEMIC_CLASSES = [
  { level: 'Primary', classes: 'I - V', ageGroup: '5-10 years' },
  { level: 'Middle School', classes: 'VI - VIII', ageGroup: '11-13 years' },
  { level: 'Secondary', classes: 'IX - X', ageGroup: '14-15 years' },
  { level: 'Senior Secondary', classes: 'XI - XII', ageGroup: '16-17 years' },
];

export const FACILITIES = [
  { name: 'Smart Classrooms', icon: '🏫', description: 'Modern smart classrooms with interactive displays' },
  { name: 'Science Labs', icon: '🔬', description: 'Well-equipped science laboratories' },
  { name: 'Computer Labs', icon: '💻', description: 'Advanced computer facilities' },
  { name: 'Library', icon: '📚', description: 'Comprehensive library with digital resources' },
  { name: 'Sports Facilities', icon: '⚽', description: 'Indoor and outdoor sports facilities' },
  { name: 'Language Labs', icon: '🗣️', description: 'Language learning labs' },
];

export const ACHIEVEMENTS = [
  { label: 'Students', value: '[Count]' },
  { label: 'Faculty', value: '[Count]' },
  { label: 'Awards', value: '[Count]' },
  { label: 'Years of Excellence', value: '[Count]' },
];

export const MANDATORY_DOCUMENTS = [
  { name: 'Affiliation Letter', file: 'affiliation-letter.pdf' },
  { name: 'Trust Registration', file: 'trust-registration.pdf' },
  { name: 'NOC Certificate', file: 'noc-certificate.pdf' },
  { name: 'Recognition Certificate', file: 'recognition-certificate.pdf' },
  { name: 'Building Safety Certificate', file: 'building-safety.pdf' },
  { name: 'Fire Safety Certificate', file: 'fire-safety.pdf' },
  { name: 'DEO Certificate', file: 'deo-certificate.pdf' },
  { name: 'Water & Sanitation Certificate', file: 'water-sanitation.pdf' },
];

export const CONTACT_INFO = {
  phone: '[Contact Number]',
  email: '[Email Address]',
  address: '[School Address]',
  mapLatitude: '28.6139',
  mapLongitude: '77.2090',
  officeHours: 'Monday - Friday: 9:00 AM - 4:00 PM',
};
