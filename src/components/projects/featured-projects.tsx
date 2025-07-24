import {
  badgeStyles,
  buttonBaseClasses,
  featuredProjects,
  iconClasses,
  iconTransform,
  itemVariants,
  mainButtonStyles,
  overlayButtonStyles,
} from '@/db/projects';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  return (
    <div className='space-y-12'>
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id ?? index}
          variants={itemVariants}
          className={`grid md:grid-cols-2 gap-8 items-center ${
            index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
            <Card className='overflow-hidden group transition-all duration-300 bg-zinc-800/50 border-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl'>
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500'
                />
                {/* Enhanced overlay with glassmorphism effect */}
                <div className='absolute inset-0 group-hover:bg-zinc-900/60 transition-all duration-300 flex items-center justify-center space-x-4'>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex space-x-4'>
                    <Button
                      size='sm'
                      variant='outline'
                      asChild
                      className={`${buttonBaseClasses} ${iconTransform} ${overlayButtonStyles.primary}`}
                    >
                      <Link
                        to={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className={iconClasses} />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      size='sm'
                      variant='outline'
                      asChild
                      className={`${buttonBaseClasses} ${iconTransform} ${overlayButtonStyles.secondary}`}
                    >
                      <Link
                        to={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className={iconClasses} />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div
            className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
          >
            <div>
              <h3 className='text-2xl font-bold mb-3 text-slate-200 group-hover:text-white transition-colors duration-300'>
                {project.title}
              </h3>
              <p className='text-slate-400 leading-relaxed hover:text-slate-300 transition-colors duration-300'>
                {project.description}
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, idx) => (
                <Badge
                  key={tech ?? idx}
                  variant='outline'
                  className={`
                    ${badgeStyles[idx % badgeStyles.length]}
                    transition-all duration-300 cursor-default
                    hover:scale-105 hover:shadow-sm
                    px-2 py-1 text-xs font-medium
                    backdrop-blur-sm
                    transform hover:-translate-y-0.5
                  `}
                >
                  <span className='relative z-10'>{tech}</span>
                </Badge>
              ))}
            </div>
            <div className='flex space-x-4'>
              <Button
                size='lg'
                variant='outline'
                asChild
                className={`${buttonBaseClasses} ${iconTransform} ${mainButtonStyles.primary} hover:scale-105 transform`}
              >
                <Link
                  to={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project
                  <ArrowRight className={iconClasses} />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
                className={`${buttonBaseClasses} ${iconTransform} ${mainButtonStyles.secondary} hover:scale-105 transform`}
              >
                <Link
                  to={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className={iconClasses} />
                  Source Code
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
