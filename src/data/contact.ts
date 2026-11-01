export interface ContactConfig {
  inquiryTypes: Array<{ value: string; label: string }>;
  email?: string;
  phone?: string;
  address?: string;
}

export const contactConfig: ContactConfig = {
  inquiryTypes: [
    { value: 'education', label: 'آموزش و کارگاه' },
    { value: 'advisory', label: 'مشاوره استراتژیک' },
    { value: 'digital-solutions', label: 'راهکارهای دیجیتال' },
    { value: 'general', label: 'عمومی' },
  ],
  email: 'info@arova.example.com',
};
