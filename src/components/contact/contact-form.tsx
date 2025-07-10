import { formSchema, itemVariants } from '@/db/contact';
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
import { Loader2, Send } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import type z from 'zod';
import { toast } from 'sonner';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
    <motion.div variants={itemVariants}>
      <Card className='bg-stone-800/50 border-stone-700/50'>
        <CardHeader>
          <CardTitle className='text-stone-100'>Send me a message</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid sm:grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-stone-200'>Name</FormLabel>
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
                      <FormLabel className='text-stone-200'>Email</FormLabel>
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
                    <FormLabel className='text-stone-200'>Subject</FormLabel>
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
                    <FormLabel className='text-stone-200'>Message</FormLabel>
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
              <Button type='submit' className='w-full' disabled={isSubmitting}>
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
  );
};

export default ContactForm;
