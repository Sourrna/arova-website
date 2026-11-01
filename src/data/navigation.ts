export interface NavItem {
  href: string;
  label: string;
  labelEn?: string;
  isCta?: boolean;
}

export const navigation: NavItem[] = [
  { href: '/services', label: 'خدمات', labelEn: 'Services' },
  { href: '/education', label: 'آموزش', labelEn: 'Education' },
  { href: '/about', label: 'درباره ما', labelEn: 'About' },
  { href: '/experts', label: 'متخصصان', labelEn: 'Experts' },
  { href: '/contact', label: 'درخواست همکاری', labelEn: 'Contact', isCta: true },
];

export const footerLinks = {
  services: [
    { href: '/services', label: 'خدمات' },
    { href: '/education', label: 'آموزش' },
    { href: '/advisory', label: 'مشاوره' },
    { href: '/digital-solutions', label: 'راهکارهای دیجیتال' },
  ],
  company: [
    { href: '/about', label: 'درباره ما' },
    { href: '/experts', label: 'متخصصان' },
    { href: '/contact', label: 'تماس با ما' },
    { href: '/privacy', label: 'حریم خصوصی' },
  ],
};
