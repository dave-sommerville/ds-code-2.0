import './css/index.css';
import HeroBanner from './Components/PageWide/HeroBanner';
import FloatingHeader from './Components/PageWide/FloatingHeader';
import Footer from './Components/PageWide/Footer';
import AppRoutes from './BLL/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <HeroBanner/>
      <FloatingHeader/>
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
