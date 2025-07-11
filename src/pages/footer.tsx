import Brand from '@/components/footer/brand';
import FooterContact from '@/components/footer/footer-contact';
import FooterEnd from '@/components/footer/footer-end';
import QuickLinks from '@/components/footer/quick-links';

export default function Footer() {
  return (
    <footer className='bg-slate-800/50 border-t border-slate-700'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <Brand />

          {/* Quick Links */}
          <QuickLinks />

          {/* Services */}

          {/* Contact */}
          <FooterContact />
        </div>

        <FooterEnd />
      </div>
    </footer>
  );
}
