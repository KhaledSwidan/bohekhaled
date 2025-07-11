import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUp,
  Heart,
  Code,
  Coffee,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/KhaledSwidan',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/bohemiancoder/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:khaledqutb4@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar?.getBoundingClientRect().height || 80;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementTop - navbarHeight + 40;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Khaled Swidan
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Frontend Developer passionate about creating exceptional digital experiences 
                  with modern web technologies. Always learning, always building.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Contact Info
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Alexandria, Egypt</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Available for remote work</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-200">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-slate-400 hover:text-slate-200 transition-colors duration-300 text-left group"
                  >
                    <span className="flex items-center space-x-2">
                      <span>{link.name}</span>
                      <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Social & CTA */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-200">Let's Connect</h4>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 ${social.color} transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-700/50 group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-100 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Availability Status */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-400">Available for new projects</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>© {currentYear} Khaled Swidan. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>in Egypt</span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Code className="w-4 h-4" />
                <span>Built with React + TypeScript + Tailwind CSS</span>
              </div>

              {/* Scroll to Top */}
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-300 group"
                aria-label="Scroll to top"
              >
                <span className="text-xs mr-2">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;