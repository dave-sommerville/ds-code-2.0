import { Link } from 'react-router-dom';
/* These should be unifed with the NavLinks */
function SplashPageFeature() {
    const links = [
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
    { to: '/playground', label: 'PlayGround' },
  ];
  return(
    <div className="splash-grid">
      {links.map((link) => (
        <div key={link.to} className="splash-item">
          <Link to={link.to} className="splash-link">
            {link.label}
          </Link>
        </div>
      ))}
    </div>  
  );
}
export default SplashPageFeature;