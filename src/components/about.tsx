import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Meta, Title } from 'react-head';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'Responsive Design', 'PWA', 'Mobile-First'],
  },
  {
    category: 'Tools',
    icon: Code,
    items: ['Git', 'VS Code', 'Webpack', 'Vite', 'Docker'],
  },
  {
    category: 'Performance',
    icon: Zap,
    items: ['Code Splitting', 'Lazy Loading', 'SEO', 'Web Vitals'],
  },
  {
    category: 'Soft Skills',
    icon: Users,
    items: ['Team Work', 'Communication', 'Problem Solving', 'Leadership'],
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

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Title>About Me - Frontend Developer Portfolio</Title>
      <Meta
        name='description'
        content='Discover more about me, my skills in React.js, Next.js, and web development. Learn about my journey and what drives me as a developer.'
      />
      <Meta
        name='keywords'
        content='about frontend developer, react developer profile, web skills, portfolio'
      />
      <Meta name='author' content='Your Name' />
      <section id='about' className='py-20 bg-slate-800/50'>
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
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50'>
                About <span className='text-slate-300'>Me</span>
              </h2>
              <p className='text-lg text-slate-400 max-w-2xl mx-auto'>
                Passionate about creating exceptional digital experiences with
                modern web technologies
              </p>
            </motion.div>

            {/* About Content */}
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <motion.div variants={itemVariants} className='space-y-6'>
                <h3 className='text-2xl font-semibold text-slate-200'>
                  My Journey
                </h3>
                <div className='space-y-4 text-slate-400'>
                  <p>
                    I'm a passionate Frontend Developer with expertise in
                    React.js, Next.js, and modern web technologies. I love
                    turning complex problems into simple, beautiful, and
                    intuitive solutions.
                  </p>
                  <p>
                    With a strong foundation in TypeScript, MongoDB, and ES6, I
                    focus on writing clean, maintainable code that delivers
                    exceptional user experiences. I'm always eager to learn new
                    technologies and stay up-to-date with industry best
                    practices.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className='relative'>
                  <div className='aspect-square rounded-2xl bg-gradient-to-br from-slate-700/20 to-slate-600/20 p-8'>
                    <div className='w-full h-full rounded-xl bg-slate-800/50 backdrop-blur-sm flex items-center justify-center border border-slate-700/50'>
                      <div className='text-center space-y-4'>
                        <div className='text-4xl font-bold text-slate-200'>
                          3+
                        </div>
                        <div className='text-sm text-slate-400'>
                          Years of Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <h3 className='text-2xl font-semibold text-center mb-8 text-slate-200'>
                Skills & Technologies
              </h3>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category ?? index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className='group'
                  >
                    <Card className='h-full transition-all duration-300 hover:shadow-lg bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'>
                      <CardContent className='p-6 space-y-4'>
                        <div className='flex items-center space-x-3'>
                          <div className='p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors'>
                            <skill.icon className='w-5 h-5 text-slate-300' />
                          </div>
                          <h4 className='font-semibold text-slate-200'>
                            {skill.category}
                          </h4>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                          {skill.items.map((item) => (
                            <span
                              key={item}
                              className='px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300'
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
