// EmailJS Configuration for Vite
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  AUTOREPLY_TEMPLATE_ID:
    import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Validate configuration
export const validateEmailJSConfig = (): boolean => {
  const requiredFields = ['SERVICE_ID', 'TEMPLATE_ID', 'PUBLIC_KEY'] as const;

  const missingFields = requiredFields.filter(
    (field) => !EMAILJS_CONFIG[field] || EMAILJS_CONFIG[field].trim() === ''
  );

  if (missingFields.length > 0) {
    console.error('Missing EmailJS configuration:', missingFields);
    console.error('Current config:', {
      SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID ? '✓ Set' : '✗ Missing',
      TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID ? '✓ Set' : '✗ Missing',
      PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? '✓ Set' : '✗ Missing',
      AUTOREPLY_TEMPLATE_ID: EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID
        ? '✓ Set'
        : '✗ Missing',
    });
    return false;
  }

  return true;
};

// Email template parameters type
export interface EmailParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}

// Auto-reply parameters type
export interface AutoReplyParams extends Record<string, unknown> {
  to_email: string;
  to_name: string;
  from_name: string;
  message: string;
}
