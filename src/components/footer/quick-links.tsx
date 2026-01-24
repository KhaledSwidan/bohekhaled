import { navItems } from '@/db/navbar';

const QuickLinks = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h4 className='font-semibold mb-4 text-slate-200'>Quick Links</h4>
      <ul className='space-y-2'>
        {navItems.map((link, idx) => (
          <li key={link.name ?? idx}>
            <button
              onClick={() => scrollToSection(link.href)}
              className='text-slate-400 hover:text-slate-200 transition-colors text-sm'
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
