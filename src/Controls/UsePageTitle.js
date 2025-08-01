// Controls/UsePageTitle.jsx
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const metaMap = {
  '/': {
    title: 'Home | My Site',
    description: 'Welcome to My Site, a hub of creative code and design.',
    image: 'https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-start.jpg',
  },
  '/about': {
    title: 'About | My Site',
    description: 'Learn more about the creator and the mission of My Site.',
    image: 'https://dave-sommerville.github.io/ds-code-releases/img/script-scavengers-preview-start.jpg',
  },
  '/portfolio': {
    title: 'Portfolio | My Site',
    description: 'Explore recent projects and case studies.',
    image: 'https://dave-sommerville.github.io/ds-code-releases/img/script-scavengers-preview-start.jpg',
  },
};

export default function UsePageTitle() {
  const { pathname } = useLocation();
  const meta = metaMap[pathname] || {
    title: 'My Site',
    description: 'Explore development projects and creative solutions.',
    image: 'https://example.com/images/og-default.jpg',
  };

  const siteUrl = 'https://ds-code.ca'; // update to your real domain
  const fullUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

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
    </Helmet>
  );
}
