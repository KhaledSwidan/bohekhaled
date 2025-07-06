import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-zinc-100/30 border-t border-zinc-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
              Portfolio
            </h3>
            <p className='text-muted-foreground text-sm'>
              Frontend Developer passionate about creating exceptional digital
              experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className='text-muted-foreground hover:text-primary transition-colors text-sm'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>Frontend Development</li>
              <li>React.js Applications</li>
              <li>TypeScript Development</li>
              <li>UI/UX Implementation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4'>Connect</h4>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'
                  aria-label={social.label}
                >
                  <social.icon className='w-4 h-4' />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-zinc-300 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
          <p className='text-muted-foreground text-sm'>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className='text-muted-foreground text-sm flex items-center'>
            Made with <Heart className='w-4 h-4 mx-1 text-red-500' /> using
            React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
