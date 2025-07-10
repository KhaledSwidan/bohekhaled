// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  AUTOREPLY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Email template parameters type
export interface EmailParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}
