import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes/';
import Navbar from './components/Navbar/';
import { GlobalContextProvider } from './Context/globalContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalContextProvider>
          <Navbar />
          <MainRoutes />
          {/* <Main /> */}
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
