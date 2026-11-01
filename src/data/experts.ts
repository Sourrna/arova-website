export interface Expert {
  id: string;
  name: string;
  nameFa: string;
  role: string;
  roleFa: string;
  bio: string;
  bioFa: string;
  areas: string[];
  image?: string;
  status: 'draft' | 'review' | 'published';
}

export const experts: Expert[] = [
  {
    id: 'sourena',
    name: 'Sourena',
    nameFa: 'سورنا',
    role: 'Product & Digital Experience | Applied AI',
    roleFa: 'محصول و تجربه کاربری دیجیتال | هوش مصنوعی کاربردی',
    bio: 'Focused on product thinking, digital experience and practical AI workflows. Works at the intersection of UX, frontend implementation and learning experience design.',
    bioFa: 'تمرکز بر فکر محصول، تجربه کاربری دیجیتال و کارگاه‌های کاربردی هوش مصنوعی. کار در 교차تجربه کاربری، پیاده‌سازی frontend و طراحی تجربه یادگیری.',
    areas: [
      'Product thinking and digital experience',
      'UX and frontend-oriented digital implementation',
      'AI literacy and practical LLM workflows',
      'Technical communication and learning experience design',
      'Early-stage digital product development',
    ],
    image: '/images/experts/sourena.svg',
    status: 'published',
  },
  {
    id: 'dr-mohammad-hossein-roozbahani',
    name: 'Dr. Mohammad-Hossein Roozbahani',
    nameFa: 'دکتر محمدحسین روزبهانی',
    role: 'Engineering & Applied AI | Hybrid Simulation & Digital Twin',
    roleFa: 'مهندسی و هوش مصنوعی کاربردی | شبیه‌سازی ترکیبی و دیجیتال تون',
    bio: 'Engineering, applied AI and hybrid simulation combining physics-based models with AI. Digital Twin, real-time simulation and technical research advisory.',
    bioFa: 'مهندسی، هوش مصنوعی کاربردی و شبیه‌سازی ترکیبی ترکیب مدل‌های مبتنی بر فیزیک با هوش مصنوعی. دیجیتال تون، شبیه‌سازی در زمان واقعی و مشاوره تحقیق فنی.',
    areas: [
      'Engineering and applied AI',
      'Hybrid simulation combining physics-based models and AI',
      'Digital Twin and real-time simulation',
      'CFD and engineering simulation',
      'Technical education and research advisory',
    ],
    image: '/images/experts/dr-roozbahani.svg',
    status: 'published',
  },
];

export const getExpertById = (id: string): Expert | undefined => {
  return experts.find((e) => e.id === id);
};
