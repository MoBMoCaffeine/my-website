export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
    downloadCV: string;
  };
  about: {
    title: string;
    description: string;
    education: string;
    university: string;
    degree: string;
    gpa: string;
    location: string;
  };
  skills: {
    title: string;
    programming: string;
    webDev: string;
    tools: string;
    soft: string;
  };
  experience: {
    title: string;
    freelance: string;
    competitive: string;
  };
  projects: {
    title: string;
    viewProject: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}
