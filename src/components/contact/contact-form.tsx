import {
  formSchema,
  formVariants,
  cardVariants,
  buttonVariants,
} from '@/db/contact';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import type z from 'zod';
import { toast } from 'sonner';
import { sendEmail, sendAutoReply } from '@/utils/send-email';

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

      // Send auto-reply (optional)
      try {
        await sendAutoReply(values.email, values.name);
      } catch (autoReplyError) {
        console.warn('Auto-reply failed:', autoReplyError);
        // Don't fail the main process if auto-reply fails
      }

      setSubmitStatus('success');
      toast.success(
        "✅ Message sent successfully! I'll get back to you within 24 hours.",
        {
          icon: <CheckCircle className='w-4 h-4' />,
          duration: 5000,
        }
      );

      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      toast.error(
        '❌ Failed to send message. Please try again or contact me directly at khaledqutb4@gmail.com',
        {
          icon: <AlertCircle className='w-4 h-4' />,
          duration: 7000,
        }
      );
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
          <CardHeader className='space-y-2'>
            <CardTitle className='text-2xl font-semibold text-slate-100 flex items-center gap-2'>
              <Send className='w-5 h-5 text-slate-400' />
              Send me a message
            </CardTitle>
            <p className='text-slate-400 text-sm'>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
          </CardHeader>

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
                  <motion.div variants={cardVariants}>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-slate-200 font-medium'>
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder='John Doe'
                              {...field}
                              className='bg-slate-700/30 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:ring-slate-400/20 transition-all duration-200'
                              aria-describedby={field.name + '-error'}
                              autoComplete='name'
                            />
                          </FormControl>
                          <FormMessage className='text-red-400 text-sm' />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={cardVariants}>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-slate-200 font-medium'>
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type='email'
                              placeholder='john@example.com'
                              {...field}
                              className='bg-slate-700/30 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:ring-slate-400/20 transition-all duration-200'
                              aria-describedby={field.name + '-error'}
                              autoComplete='email'
                            />
                          </FormControl>
                          <FormMessage className='text-red-400 text-sm' />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                </motion.div>

                {/* Subject */}
                <motion.div variants={cardVariants}>
                  <FormField
                    control={form.control}
                    name='subject'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-slate-200 font-medium'>
                          Subject *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Let's work together!"
                            {...field}
                            className='bg-slate-700/30 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:ring-slate-400/20 transition-all duration-200'
                            aria-describedby={field.name + '-error'}
                          />
                        </FormControl>
                        <FormMessage className='text-red-400 text-sm' />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={cardVariants}>
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-slate-200 font-medium'>
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Tell me about your project, ideas, or just say hello...'
                            className='min-h-[140px] bg-slate-700/30 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:ring-slate-400/20 transition-all duration-200 resize-none'
                            {...field}
                            aria-describedby={field.name + '-error'}
                          />
                        </FormControl>
                        <FormMessage className='text-red-400 text-sm' />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={cardVariants}>
                  <motion.div
                    variants={buttonVariants}
                    animate={getButtonState()}
                    whileHover={!isSubmitting ? 'hover' : undefined}
                    whileTap={!isSubmitting ? 'tap' : undefined}
                  >
                    <Button
                      type='submit'
                      className='w-full h-12 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-100 font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
                      disabled={isSubmitting}
                      aria-describedby='submit-status'
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                          Sending Message...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className='w-4 h-4 mr-2' />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className='w-4 h-4 mr-2' />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Form Status */}
                <div id='submit-status' className='sr-only' aria-live='polite'>
                  {isSubmitting && 'Sending your message...'}
                  {submitStatus === 'success' && 'Message sent successfully!'}
                  {submitStatus === 'error' &&
                    'Failed to send message. Please try again.'}
                </div>
              </form>
            </Form>

            {/* Additional Info */}
            <motion.div
              variants={cardVariants}
              className='pt-4 border-t border-slate-700/50'
            >
              <p className='text-xs text-slate-500 text-center'>
                Your information is secure and will never be shared with third
                parties.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
