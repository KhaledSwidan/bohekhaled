import { motion } from 'framer-motion';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cardVariants } from '@/db/contact';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

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

export default AnimatedFormField;
