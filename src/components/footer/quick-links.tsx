import { navItems } from '@/db/navbar';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const QuickLinks = () => {
  const location = useLocation();

  return (
    <div>
      <h4 className='font-semibold mb-4 text-slate-200'>Quick Links</h4>
      <nav aria-label='Footer navigation'>
        <ul className='space-y-2 text-sm'>
          {navItems.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'inline-block transition-colors duration-200',
                    isActive
                      ? 'text-slate-200 font-medium'
                      : 'text-slate-400 hover:text-slate-200',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
