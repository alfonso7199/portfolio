export type Section = 'home' | 'projects' | 'info' | 'contact';

export interface NavItem {
  id: Section;
  label: string;
}