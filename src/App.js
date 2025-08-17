// App.jsx
import './css/index.css';
import './css/roots.css';
import './css/reset.css';
import AppRoutes from './BLL/Routes';
import ScrollToTop from './Controls/ScrollToTop';
import {portfolioArray} from '../src/BLL/PortfolioItems';


function App() {
    {/* Preload all portfolio images */}
  {portfolioArray.map((item, idx) => (
    <img
      key={`preload-${idx}`}
      src={item.imgUrl}
      alt={item.title}
      style={{ display: 'none' }}
      loading="eager"
    />
  ))}
  return(
    <>
      <ScrollToTop></ScrollToTop>
      <AppRoutes />
    </>
  );
}

export default App;
