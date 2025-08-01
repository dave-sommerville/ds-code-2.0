import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const metaMap = {
  '/': {
    title: 'Home | DS Code',
    description: 'My Online Portfolio celebrating my journey in web development.',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
  '/about': {
    title: 'About | DS Code',
    description: 'Learn my story and the mission of DS Code.',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
  '/portfolio': {
    title: 'Portfolio | DS Code',
    description: 'Explore my work by category.',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
    '/playground': {
    title: 'Games | DS Code',
    description: 'Welcome to the playground, because I learn best when I have fun.',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
    '/contact': {
    title: 'Contact | DS Code',
    description: 'Reach out and say hi!',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
    '/collaborators': {
    title: 'Collaborators | DS Code',
    description: "Fellow devlopers I've had the opportunity to collaborate with.",
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
    '/releases': {
    title: 'Releases | DS Code',
    description: 'Some of my more packages and external projects.',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
    '/': {
    title: 'Something Else... | DS Code',
    description: 'You found an easter egg!',
    image: 'https://ds-code.ca/public/images/site-preview.png',
  },
};

export default function UsePageTitle() {
  const { pathname } = useLocation();
  const meta = metaMap[pathname] || {
    title: 'My Site',
    description: 'Explore development projects and creative solutions.',
    image: 'https://example.com/images/og-default.jpg',
  };

  const siteUrl = 'https://ds-code.ca';
  const fullUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://ds-code.ca/current-page-url" />
      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            "name": "DS Code",
            "url": "https://ds-code.ca",
            "logo": "https://ds-code.ca/public/images/site-preview.png",
            "description": "A web developer based in Winnipeg, Canada, building fast, accessible, and modern websites. Actively seeking full-time opportunities. Focused on creating custom Web applications with best practices, crafting scalable, maintainable, and versatile code.",
            "sameAs": [
              "www.linkedin.com/in/dave-sommerville-2abb50326",
              "https://github.com/dave-sommerville",
              "https://www.youtube.com/@davesommerville-ds-code",
              "https://dave-sommerville.github.io/ds-code-releases/"
            ]
          })}
        </script>
    </Helmet>
  );
}
