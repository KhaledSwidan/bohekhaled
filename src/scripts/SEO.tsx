// scripts/SEO.tsx
import { useEffect } from 'react';
import { Title, Meta, Link } from 'react-head';
import { jsonLd, portfolioSchema, websiteSchema, websiteUrl } from './jsonLd';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = 'Khaled Swidan - Frontend Developer Portfolio',
  description = 'Frontend Web Developer specializing in React.js, Next.js, TypeScript, and modern web technologies.',
  keywords = 'frontend developer, react, next.js, portfolio, typescript, web development, khaled swidan',
  image = `${websiteUrl}/og-image.jpg`,
  url = websiteUrl,
  type = 'website',
  author = 'Khaled Swidan',
  twitterHandle = '@KSwidan2',
}: SEOProps) => {
  useEffect(() => {
    // ✅ Dynamic title updates
    document.title = title;

    // ✅ Update theme color based on current theme
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const themeColor = isDark ? '#18181b' : '#f4f4f5';

      let themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (!themeMetaTag) {
        themeMetaTag = document.createElement('meta');
        themeMetaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(themeMetaTag);
      }
      themeMetaTag.setAttribute('content', themeColor);
    };

    updateThemeColor();

    // ✅ Listen for theme changes
    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // ✅ Add missing SEO meta tags
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

    // ✅ Add essential meta tags
    addMetaIfMissing(
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large'
    );
    addMetaIfMissing('googlebot', 'index, follow');
    addMetaIfMissing('bingbot', 'index, follow');
    addMetaIfMissing('author', author);
    addMetaIfMissing('keywords', keywords);

    // ✅ Add canonical link
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }

    // ✅ Add structured data
    const addStructuredData = (schema: object, id: string) => {
      if (!document.querySelector(`script[data-schema="${id}"]`)) {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', id);
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    };

    addStructuredData(jsonLd, 'person');
    addStructuredData(portfolioSchema, 'portfolio');
    addStructuredData(websiteSchema, 'website');

    return () => {
      observer.disconnect();
    };
  }, [title, url, description, keywords, author]);

  return (
    <>
      {/* ✅ Dynamic Meta Tags via react-head */}
      <Title>{title}</Title>
      <Meta name='description' content={description} />

      {/* ✅ Open Graph - Facebook */}
      <Meta property='og:title' content={title} />
      <Meta property='og:description' content={description} />
      <Meta property='og:type' content={type} />
      <Meta property='og:url' content={url} />
      <Meta property='og:image' content={image} />
      <Meta property='og:image:alt' content={`${author} - Portfolio Preview`} />
      <Meta property='og:site_name' content={`${author} Portfolio`} />
      <Meta property='og:locale' content='en_US' />

      {/* ✅ Twitter Card */}
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
      <Meta name='twitter:url' content='https://x.com/KSwidan2' />

      {/* ✅ Mobile & App Meta Tags */}
      <Meta name='format-detection' content='telephone=no' />
      <Meta name='mobile-web-app-capable' content='yes' />
      <Meta name='apple-mobile-web-app-capable' content='yes' />
      <Meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <Meta name='apple-mobile-web-app-title' content={author} />
      <Meta name='msapplication-TileColor' content='#1e1b4b' />

      {/* ✅ Favicons & Icons */}
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
      <Link rel='mask-icon' href='/safari-pinned-tab.svg' color='#1e1b4b' />

      {/* ✅ Performance Optimization */}
      <Link rel='preconnect' href='https://api.emailjs.com' />
      <Link rel='dns-prefetch' href='https://fonts.googleapis.com' />
      <Link rel='dns-prefetch' href='https://api.emailjs.com' />
    </>
  );
};

export default SEO;
