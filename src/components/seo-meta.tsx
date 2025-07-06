import { useEffect } from 'react';
import { Meta, Link } from 'react-head';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  twitterHandle?: string;
}

const websiteUrl = 'https://bohekhaled.vercel.app';

export default function SEOMeta({
  title = 'Khaled Swidan - Frontend Developer',
  description = 'Frontend Web Developer specializing in React.js, Next.js, TypeScript, and modern web technologies.',
  keywords = 'frontend developer, react, nextjs, typescript, web development, portfolio',
  image = `${websiteUrl}/og-image.jpg`,
  url = websiteUrl,
  type = 'website',
  author = 'Khaled Swidan',
  twitterHandle = '@KSwidan2',
}: SEOMetaProps) {
  useEffect(() => {
    // Dynamic title updates
    document.title = title;

    // Add missing meta tags
    const addMetaIfMissing = (
      name: string,
      content: string,
      property = false
    ) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      if (!document.querySelector(selector)) {
        const meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Essential meta tags
    addMetaIfMissing(
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large'
    );
    addMetaIfMissing('googlebot', 'index, follow');
    addMetaIfMissing('author', author);
    addMetaIfMissing('keywords', keywords);

    // Theme color
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const themeColor = isDark ? '#0f172a' : '#f8fafc';

      let themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (!themeMetaTag) {
        themeMetaTag = document.createElement('meta');
        themeMetaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(themeMetaTag);
      }
      themeMetaTag.setAttribute('content', themeColor);
    };

    updateThemeColor();

    // Canonical link
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }

    // Structured data
    if (!document.querySelector('script[data-schema="person"]')) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema', 'person');
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: author,
        jobTitle: 'Frontend Developer',
        description,
        url,
        image,
        email: 'khaledqutb4@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Alexandria',
          addressCountry: 'Egypt',
        },
        knowsAbout: [
          'React.js',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Frontend Development',
        ],
        sameAs: [
          'https://github.com/KhaledSwidan',
          'https://www.linkedin.com/in/bohemiancoder/',
          'https://twitter.com/KSwidan2',
        ],
      });
      document.head.appendChild(script);
    }
  }, [title, url, description, keywords, author, image]);

  return (
    <>
      {/* Open Graph - Facebook */}
      <Meta property='og:title' content={title} />
      <Meta property='og:description' content={description} />
      <Meta property='og:type' content={type} />
      <Meta property='og:url' content={url} />
      <Meta property='og:image' content={image} />
      <Meta property='og:image:alt' content={`${author} - Portfolio Preview`} />
      <Meta property='og:site_name' content={`${author} Portfolio`} />
      <Meta property='og:locale' content='en_US' />

      {/* Twitter Card */}
      <Meta name='twitter:card' content='summary_large_image' />
      <Meta name='twitter:title' content={title} />
      <Meta name='twitter:description' content={description} />
      <Meta name='twitter:image' content={image} />
      <Meta
        name='twitter:image:alt'
        content={`${author} - Portfolio Preview`}
      />
      <Meta name='twitter:creator' content={twitterHandle} />
      <Meta name='twitter:site' content={twitterHandle} />

      {/* Mobile & App Meta Tags */}
      <Meta name='format-detection' content='telephone=no' />
      <Meta name='mobile-web-app-capable' content='yes' />
      <Meta name='apple-mobile-web-app-capable' content='yes' />
      <Meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <Meta name='apple-mobile-web-app-title' content={author} />

      {/* Favicons & Icons */}
      <Link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <Link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <Link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <Link rel='mask-icon' href='/safari-pinned-tab.svg' color='#0f172a' />

      {/* Performance Optimization */}
      <Link rel='preconnect' href='https://api.emailjs.com' />
      <Link rel='dns-prefetch' href='https://fonts.googleapis.com' />
      <Link rel='dns-prefetch' href='https://api.emailjs.com' />
      <Link rel='dns-prefetch' href='https://images.pexels.com' />
    </>
  );
}
