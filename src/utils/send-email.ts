import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, type EmailParams } from '@/lib/emailjs';
import { toast } from 'sonner';

interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendEmail = async (formData: FormDataProps): Promise<boolean> => {
  try {
    // Prepare email parameters
    const emailParams: EmailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'khaledqutb4@gmail.com', // Your Gmail
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      emailParams as Record<string, unknown>
    );

    if (response.status === 200) {
      toast.success('Email sent successfully!');
      return true;
    } else {
      throw new Error(`EmailJS returned status: ${response.status}`);
    }
  } catch (error) {
    // Show user-friendly error message
    if (error instanceof Error) {
      toast.error(`Failed to send email: ${error.message}`);
    } else {
      toast.error(
        'Failed to send email. Please try again or contact me directly.'
      );
    }

    return false;
  }
};

// Auto-reply function (optional)
export const sendAutoReply = async (
  userEmail: string,
  userName: string
): Promise<void> => {
  try {
    const autoReplyParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'Khaled Swidan',
      message: `Hi ${userName},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.

Best regards,
Khaled Swidan
Frontend Developer`,
    };

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID,
      autoReplyParams
    );
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    // Don't show error to user for auto-reply failure
  }
};
