import { services } from '@/db/footer';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Services = memo(() => {
  return (
    <div>
      <h4 className='font-semibold mb-4 text-slate-200'>Services</h4>
      <ul className='space-y-2 text-sm'>
        {services.map((service) => (
          <li key={service.id}>
            <Link
              to={`/services/${service.slug}`}
              className='text-slate-400 hover:text-slate-200 transition-colors duration-200 inline-block'
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
