export type Section = 'home' | 'projects' | 'info' | 'contact' | 'faq';

export interface NavItem {
  id: Section;
  label: string;
}