import { CardHeader, CardTitle } from '../ui/card';
import { Send } from 'lucide-react';

const ContactFormCardHeader = () => {
  return (
    <CardHeader className='space-y-2'>
      <CardTitle className='text-2xl font-semibold text-slate-100 flex items-center gap-2'>
        <Send className='w-5 h-5 text-slate-400' />
        Send me a message
      </CardTitle>
      <p className='text-slate-400 text-sm'>
        Fill out the form below and I'll get back to you as soon as possible.
      </p>
    </CardHeader>
  );
};

export default ContactFormCardHeader;
