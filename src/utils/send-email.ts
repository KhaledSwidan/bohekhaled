import emailjs from '@emailjs/browser';
import {
  EMAILJS_CONFIG,
  validateEmailJSConfig,
  type EmailParams,
  type AutoReplyParams,
} from '@/lib/emailjs';

interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize EmailJS only once and validate config
let isInitialized = false;

const initializeEmailJS = (): boolean => {
  if (isInitialized) return true;

  if (!validateEmailJSConfig()) {
    console.error('❌ EmailJS configuration is invalid');
    return false;
  }

  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    isInitialized = true;
    console.log('✅ EmailJS initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize EmailJS:', error);
    return false;
  }
};

export const sendEmail = async (formData: FormDataProps): Promise<boolean> => {
  try {
    console.log('🚀 Starting email send process...');

    // Initialize EmailJS if not already done
    if (!initializeEmailJS()) {
      throw new Error('EmailJS initialization failed');
    }

    // Validate form data
    if (
      !formData.name?.trim() ||
      !formData.email?.trim() ||
      !formData.message?.trim()
    ) {
      throw new Error('Missing required form data');
    }

    // Prepare email parameters
    const emailParams: EmailParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject: formData.subject?.trim() || 'New Contact Form Message',
      message: formData.message.trim(),
      to_email: 'khaledqutb4@gmail.com', // Your Gmail
    };

    console.log('📧 Sending email with params:', {
      from_name: emailParams.from_name,
      from_email: emailParams.from_email,
      subject: emailParams.subject,
      message: emailParams.message.substring(0, 50) + '...', // Log truncated message for privacy
      to_email: emailParams.to_email,
    });

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      emailParams as Record<string, unknown>
    );

    console.log('✅ EmailJS response:', response);

    if (response.status === 200) {
      console.log('✅ Email sent successfully!');
      return true;
    } else {
      throw new Error(
        `EmailJS returned status: ${response.status} - ${response.text}`
      );
    }
  } catch (error) {
    console.error('❌ Email sending failed:', error);

    // More specific error handling
    if (error instanceof Error) {
      if (
        error.message.includes('network') ||
        error.message.includes('fetch')
      ) {
        throw new Error(
          'Network error. Please check your internet connection.'
        );
      } else if (
        error.message.includes('unauthorized') ||
        error.message.includes('403')
      ) {
        throw new Error(
          'Email service configuration error. Please contact support.'
        );
      } else if (error.message.includes('rate limit')) {
        throw new Error(
          'Too many requests. Please wait a moment and try again.'
        );
      } else if (error.message.includes('Invalid template ID')) {
        throw new Error('Email template configuration error.');
      } else if (error.message.includes('Invalid service ID')) {
        throw new Error('Email service configuration error.');
      }
      throw error;
    } else {
      throw new Error('Unknown error occurred while sending email');
    }
  }
};

// Auto-reply function (optional)
export const sendAutoReply = async (
  userEmail: string,
  userName: string
): Promise<void> => {
  try {
    if (!initializeEmailJS()) {
      throw new Error('EmailJS initialization failed');
    }

    // Skip auto-reply if template ID is not configured
    if (!EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID) {
      console.log('ℹ️ Auto-reply template not configured, skipping...');
      return;
    }

    const autoReplyParams: AutoReplyParams = {
      to_email: userEmail.trim(),
      to_name: userName.trim(),
      from_name: 'Khaled Swidan',
      message: `Hi ${userName.trim()},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.

Best regards,
Khaled Swidan
Frontend Developer`,
    };

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID,
      autoReplyParams as Record<string, unknown>
    );

    console.log('✅ Auto-reply sent successfully');
  } catch (error) {
    console.error('❌ Failed to send auto-reply:', error);
    // Don't throw error for auto-reply failure
  }
};
