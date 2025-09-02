// Global TypeScript type definitions

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: any;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: any;
}