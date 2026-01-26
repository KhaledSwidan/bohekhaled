import BackgroundAnimation from '@/components/hero/background-animation';
import ProfileImage from '@/components/hero/profile-image';
import MainContent from '@/components/hero/main-content';
import SocialLinks from '@/components/hero/social-links';
import CTAButtons from '@/components/hero/cta-btns';
import ScrollIndicator from '@/components/hero/scroll-indicator';

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900'
    >
      <BackgroundAnimation />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 relative z-10'>
        <div className='space-y-8'>
          <ProfileImage />
          <MainContent />
          <SocialLinks variant='hero' />
          <CTAButtons />
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
