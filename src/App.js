import './css/index.css';
import HeroBanner from './Components/PageWide/HeroBanner';
import FloatingHeader from './Components/PageWide/FloatingHeader';
import Footer from './Components/PageWide/Footer';
import AppRoutes from './BLL/Routes';
function App() {
  return (
    <>
      <HeroBanner/>
      <FloatingHeader/>
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
