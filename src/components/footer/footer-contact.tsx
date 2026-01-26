// src/components/footer/FooterContact.tsx
import { memo } from 'react';
import SocialLinks from '../hero/social-links';
import { footerSocialLinks } from '@/db/hero';

const FooterContact = memo(() => {
  return (
    <div>
      <h4 className='font-semibold mb-4 text-slate-200'>Connect</h4>
      <SocialLinks
        links={footerSocialLinks}
        className='flex gap-3'
        variant='footer'
      />
    </div>
  );
});

FooterContact.displayName = 'FooterContact';

export default FooterContact;
