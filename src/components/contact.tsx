import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Meta, Title } from 'react-head';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'New York, NY',
    href: 'https://maps.google.com',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Title>Contact - Your Name</Title>
      <Meta
        name='description'
        content="Get in touch with me via this contact form. I'm open to new opportunities, projects, and collaborations."
      />
      <Meta name='author' content='Your Name' />
      <section id='contact' className='py-20 bg-stone-900'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className='space-y-16'
          >
            {/* Section Header */}
            <motion.div
              variants={itemVariants}
              className='text-center space-y-4'
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-stone-50'>
                Get In <span className='text-stone-300'>Touch</span>
              </h2>
              <p className='text-lg text-stone-400 max-w-2xl mx-auto'>
                Let's discuss your next project or just say hello!
              </p>
            </motion.div>

            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className='bg-stone-800/50 border-stone-700/50'>
                  <CardHeader>
                    <CardTitle className='text-stone-100'>
                      Send me a message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-6'
                      >
                        <div className='grid sm:grid-cols-2 gap-4'>
                          <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-stone-200'>
                                  Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder='Your name'
                                    {...field}
                                    className='bg-stone-700/50 border-stone-600 text-stone-100'
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-stone-200'>
                                  Email
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder='your.email@example.com'
                                    {...field}
                                    className='bg-stone-700/50 border-stone-600 text-stone-100'
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name='subject'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-stone-200'>
                                Subject
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Let's work together!"
                                  {...field}
                                  className='bg-stone-700/50 border-stone-600 text-stone-100'
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='message'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-stone-200'>
                                Message
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder='Tell me about your project...'
                                  className='min-h-[120px] bg-stone-700/50 border-stone-600 text-stone-100'
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type='submit'
                          className='w-full'
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className='w-4 h-4 mr-2' />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className='space-y-8'>
                <div>
                  <h3 className='text-2xl font-semibold mb-6 text-stone-200'>
                    Let's connect
                  </h3>
                  <p className='text-stone-400 mb-8'>
                    I'm always interested in hearing about new opportunities and
                    projects. Whether you're a company looking to hire, or
                    you're someone looking to collaborate, I'd love to hear from
                    you.
                  </p>
                </div>

                <div className='space-y-6'>
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      target={
                        info.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        info.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      whileHover={{ x: 5 }}
                      className='flex items-center space-x-4 p-4 rounded-lg hover:bg-stone-800/50 transition-colors group'
                    >
                      <div className='p-3 rounded-full bg-stone-700/50 group-hover:bg-stone-600/50 transition-colors'>
                        <info.icon className='w-5 h-5 text-stone-300' />
                      </div>
                      <div>
                        <h4 className='font-medium text-stone-200'>
                          {info.title}
                        </h4>
                        <p className='text-stone-400'>{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Map placeholder */}
                <motion.div
                  variants={itemVariants}
                  className='mt-8 h-64 rounded-lg bg-stone-800/50 flex items-center justify-center border border-stone-700/50'
                >
                  <div className='text-center space-y-2'>
                    <MapPin className='w-8 h-8 text-stone-400 mx-auto' />
                    <p className='text-stone-400'>
                      Interactive map coming soon
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
