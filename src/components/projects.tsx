import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, MongoDB, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.',
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: [
      'Next.js',
      'MongoDB',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'Weather API', 'Chart.js', 'CSS Modules'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website with dark mode, smooth animations, and optimized performance. Built with modern web technologies.',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Learning Management System',
    description:
      'A comprehensive LMS with course creation, student progress tracking, video streaming, and interactive quizzes.',
    image:
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'AWS S3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
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

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id='projects' className='py-20 bg-zinc-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='space-y-16'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center space-y-4'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50'>
              Featured <span className='text-zinc-300'>Projects</span>
            </h2>
            <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className='space-y-12'>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className='overflow-hidden group hover:shadow-xl transition-all duration-300 bg-zinc-800/50 border-zinc-700/50'>
                    <div className='relative overflow-hidden'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
                        <Button size='sm' variant='secondary' asChild>
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='w-4 h-4 mr-2' />
                            Live Demo
                          </a>
                        </Button>
                        <Button size='sm' variant='outline' asChild>
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='w-4 h-4 mr-2' />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div>
                    <h3 className='text-2xl font-bold mb-3 text-zinc-100'>
                      {project.title}
                    </h3>
                    <p className='text-zinc-400 leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant='secondary'
                        className='bg-zinc-700/50 text-zinc-300'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex space-x-4'>
                    <Button asChild>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Project
                        <ArrowRight className='w-4 h-4 ml-2' />
                      </a>
                    </Button>
                    <Button variant='outline' asChild>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className='w-4 h-4 mr-2' />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-semibold text-center mb-8 text-zinc-200'>
              Other Notable Projects
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='group'
                >
                  <Card className='h-full hover:shadow-lg transition-all duration-300 bg-zinc-800/50 border-zinc-700/50'>
                    <CardHeader className='p-0'>
                      <div className='relative overflow-hidden rounded-t-lg'>
                        <img
                          src={project.image}
                          alt={project.title}
                          className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                      </div>
                    </CardHeader>
                    <CardContent className='p-6'>
                      <h4 className='font-semibold text-lg mb-2 text-zinc-100'>
                        {project.title}
                      </h4>
                      <p className='text-zinc-400 text-sm mb-4 line-clamp-3'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-1'>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant='outline'
                            className='text-xs bg-zinc-700/30 text-zinc-300 border-zinc-600'
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant='outline'
                            className='text-xs bg-zinc-700/30 text-zinc-300 border-zinc-600'
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className='p-6 pt-0 flex space-x-2'>
                      <Button
                        size='sm'
                        variant='outline'
                        className='flex-1'
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='w-3 h-3 mr-1' />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size='sm'
                        variant='outline'
                        className='flex-1'
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Github className='w-3 h-3 mr-1' />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
