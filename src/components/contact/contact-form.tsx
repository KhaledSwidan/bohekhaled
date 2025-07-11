import { formSchema, formVariants, cardVariants } from '@/db/contact';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import type { z } from 'zod';
import { toast } from 'sonner';
import { sendEmail, sendAutoReply } from '@/utils/send-email';
import ContactFormCardHeader from './contactForm-cardHeader';
import SubmitButton from './submit-button';

// Inline AnimatedFormField component
interface AnimatedFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'textarea';
  required?: boolean;
  autoComplete?: string;
  className?: string;
  minHeight?: string;
}

const AnimatedFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  autoComplete,
  className,
  minHeight,
}: AnimatedFormFieldProps<TFieldValues, TName>) => {
  const baseInputClasses =
    'bg-slate-700/30 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:ring-slate-400/20 transition-all duration-200';

  return (
    <motion.div variants={cardVariants} className={className}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-slate-200 font-medium'>
              {label} {required && '*'}
            </FormLabel>
            <FormControl>
              {type === 'textarea' ? (
                <Textarea
                  placeholder={placeholder}
                  className={`${baseInputClasses} resize-none ${
                    minHeight || 'min-h-[140px]'
                  }`}
                  {...field}
                  aria-describedby={field.name + '-error'}
                />
              ) : (
                <Input
                  type={type}
                  placeholder={placeholder}
                  {...field}
                  className={baseInputClasses}
                  aria-describedby={field.name + '-error'}
                  autoComplete={autoComplete}
                />
              )}
            </FormControl>
            <FormMessage className='text-red-400 text-sm' />
          </FormItem>
        )}
      />
    </motion.div>
  );
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const emailSent = await sendEmail(values);

      if (!emailSent) {
        throw new Error('Failed to send email');
      }

      // Send auto-reply
      try {
        await sendAutoReply(values.email, values.name);
      } catch (autoReplyError) {
        console.warn('⚠️ Auto-reply failed:', autoReplyError);
      }

      setSubmitStatus('success');
      toast.success(
        "✅ Message sent successfully! I'll get back to you within 24 hours.",
        {
          icon: <CheckCircle className='w-4 h-4' />,
          position: 'top-right',
          duration: 5000,
        }
      );
      form.reset();
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitStatus('error');

      let errorMessage =
        '❌ Failed to send message. Please try again or contact me directly at khaledqutb4@gmail.com';

      if (error instanceof Error) {
        errorMessage = `❌ ${error.message}`;
      }

      toast.error(errorMessage, {
        icon: <AlertCircle className='w-4 h-4' />,
        position: 'top-right',
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  // Determine button animation state
  const getButtonState = () => {
    if (isSubmitting) return 'loading';
    if (submitStatus === 'success') return 'success';
    return 'idle';
  };

  return (
    <motion.div variants={formVariants} className='w-full'>
      <motion.div variants={cardVariants}>
        <Card className='bg-slate-800/40 border-slate-700/50 backdrop-blur-sm shadow-2xl hover:shadow-slate-900/20 transition-all duration-300'>
          <ContactFormCardHeader />
          <CardContent className='space-y-6'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
                noValidate
              >
                {/* Name and Email Row */}
                <motion.div
                  className='grid sm:grid-cols-2 gap-4'
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <AnimatedFormField
                    control={form.control}
                    name='name'
                    label='Full Name'
                    placeholder='Please enter your name'
                    required
                    autoComplete='name'
                  />

                  <AnimatedFormField
                    control={form.control}
                    name='email'
                    label='Email Address'
                    placeholder='john@example.com'
                    type='email'
                    required
                    autoComplete='email'
                  />
                </motion.div>

                {/* Subject */}
                <AnimatedFormField
                  control={form.control}
                  name='subject'
                  label='Subject'
                  placeholder="Let's work together!"
                  required
                />

                {/* Message */}
                <AnimatedFormField
                  control={form.control}
                  name='message'
                  label='Message'
                  placeholder='Tell me about your project, ideas, or just say hello...'
                  type='textarea'
                  required
                  minHeight='min-h-[140px]'
                />

                {/* Submit Button */}
                <SubmitButton
                  getButtonState={getButtonState}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                />
              </form>
            </Form>

            {/* Additional Info */}
            <motion.div
              variants={cardVariants}
              className='pt-4 border-t border-slate-700/50'
            >
              <p className='text-xs text-slate-500 text-center'>
                Your information is secure and will never be shared with third parties.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
