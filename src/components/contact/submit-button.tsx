import { buttonVariants, cardVariants } from '@/db/contact';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { CheckCircle, Loader2, Send } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  getButtonState: () => 'idle' | 'loading' | 'success';
}

const SubmitButton = ({
  isSubmitting,
  submitStatus,
  getButtonState,
}: SubmitButtonProps) => {
  return (
    <>
      {' '}
      <motion.div variants={cardVariants}>
        <motion.div
          variants={buttonVariants}
          animate={getButtonState()}
          whileHover={!isSubmitting ? 'hover' : undefined}
          whileTap={!isSubmitting ? 'tap' : undefined}
        >
          <Button
            type='submit'
            className='w-full rounded-lg h-12 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-100 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
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
    </>
  );
};

export default SubmitButton;
