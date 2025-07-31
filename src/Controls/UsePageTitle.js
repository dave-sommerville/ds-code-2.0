import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const routeToTitle = {
      '/': 'Home | My Site',
      '/about': 'About | My Site',
      '/portfolio': 'Portfolio | My Site',
      '/contact': 'Contact | My Site',
      '/playground': 'Playground | My Site',
      '/releases': 'Releases | My Site',
      '/collaborators': 'Collaborators | My Site',
      '/something-else': 'More Stuff | My Site',
    };

    document.title = routeToTitle[location.pathname] || 'My Site';
  }, [location.pathname]);
}
export default UsePageTitle;