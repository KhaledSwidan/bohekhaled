// src/components/hero/social-links.tsx
import { socialLinks as defaultLinks } from '@/db/hero';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';
import type { SocialLink } from '@/db/hero';
import { memo } from 'react';

interface SocialLinksProps {
  links?: readonly SocialLink[];
  variant?: 'hero' | 'footer';
  className?: string;
}

const SocialLinks = memo(
  ({ links = defaultLinks, variant = 'hero', className }: SocialLinksProps) => {
    const { container, item, shouldReduceMotion } = useAnimationVariants();

    const styles = {
      hero: {
        container: 'flex items-center justify-center gap-4',
        button:
          'p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700',
        icon: 'w-6 h-6',
        animation: { scale: 1.1, y: -5 },
      },
      footer: {
        container: 'flex gap-3',
        button: 'p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50',
        icon: 'w-5 h-5',
        animation: { scale: 1.05 },
      },
    };

    const style = styles[variant];

    return (
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={variant === 'hero' ? 'hidden' : undefined}
          whileInView={variant === 'hero' ? 'visible' : undefined}
          variants={
            shouldReduceMotion || variant === 'footer' ? undefined : container
          }
          viewport={
            variant === 'hero' ? { once: true, amount: 0.5 } : undefined
          }
          className={className || style.container}
        >
          {links.map(({ icon: Icon, href, label, ariaLabel }) => (
            <m.a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              variants={
                shouldReduceMotion || variant === 'footer' ? undefined : item
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      ...style.animation,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 9,
                      },
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
              className={`group relative ${style.button} transition-colors overflow-hidden`}
              aria-label={ariaLabel || `Visit my ${label}`}
            >
              <Icon
                className={`relative z-10 ${style.icon} text-slate-300 group-hover:text-slate-100 transition-colors duration-200`}
                strokeWidth={1.5}
              />
            </m.a>
          ))}
        </m.div>
      </LazyMotion>
    );
  },
);

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
