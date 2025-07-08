import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  badgeStyles,
  buttonBaseClasses,
  iconClasses,
  iconTransform,
  itemVariants,
  mainButtonStyles,
  otherProjects,
} from '@/db/projects';
import { Button } from '../ui/button';
import { ArrowRight, Github } from 'lucide-react';

const OtherProjects = () => {
  return (
    <motion.div variants={itemVariants}>
      <h3 className='text-2xl font-semibold text-center mb-8 text-zinc-300'>
        Other Notable Projects
      </h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {otherProjects.map((project, idx) => (
          <motion.div
            key={project.id ?? idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className='group'
          >
            <Card className='h-full transition-all duration-300 bg-zinc-800/50 border-zinc-700/50'>
              <CardHeader className='p-0'>
                <div className='relative overflow-hidden rounded-t-lg'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-500'
                  />
                </div>
              </CardHeader>
              <CardContent className='p-6'>
                <h4 className='font-semibold text-lg mb-2 text-slate-200 group-hover:text-white transition-colors duration-300'>
                  {project.title}
                </h4>
                <p className='text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed hover:text-slate-300 transition-colors duration-300'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1'>
                  {project.technologies.slice(0, 3).map((tech, idx) => (
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
              <CardFooter className='flex justify-center items-end space-x-4'>
                <Button
                  size='lg'
                  variant='outline'
                  asChild
                  className={`${buttonBaseClasses} ${iconTransform} ${mainButtonStyles.primary} hover:scale-105 transform`}
                >
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Demo
                    <ArrowRight className={iconClasses} />
                  </a>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  asChild
                  className={`${buttonBaseClasses} ${iconTransform} ${mainButtonStyles.secondary} hover:scale-105 transform`}
                >
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className={iconClasses} />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherProjects;
