// App.jsx
import './css/index.css';
import './css/utils.css';
import AppRoutes from './BLL/Routes';
import ScrollToTop from './BLL/ScrollToTop';

function App() {
  return(
    <>
      <ScrollToTop></ScrollToTop>
      <AppRoutes />
    </>
  );
}

export default App;
