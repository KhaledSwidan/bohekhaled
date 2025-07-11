'use client';

import { z } from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Variants } from 'framer-motion';

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(
      /^[a-zA-Z\s\u0600-\u06FF]+$/,
      'Name can only contain letters and spaces'
    ),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'khaledqutb4@gmail.com',
    href: 'mailto:khaledqutb4@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+20 1234567890',
    href: 'tel:+201234567890',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Alexandria, Egypt',
    href: 'https://maps.google.com/?q=Alexandria,Egypt',
  },
];

// Animation variants
const contactVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const infoVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const buttonVariants: Variants = {
  idle: {
    scale: 1,
    backgroundColor: 'rgb(51, 65, 85)', // slate-700
  },
  hover: {
    scale: 1.02,
    backgroundColor: 'rgb(30, 41, 59)', // slate-800
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
  loading: {
    scale: 1,
    backgroundColor: 'rgb(71, 85, 105)', // slate-600
    transition: {
      duration: 0.3,
    },
  },
  success: {
    scale: 1.05,
    backgroundColor: 'rgb(34, 197, 94)', // green-500
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export {
  formSchema,
  contactInfo,
  contactVariants,
  itemVariants,
  formVariants,
  infoVariants,
  cardVariants,
  buttonVariants,
};
