import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes/';
import Navbar from './components/Navbar/';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
        {/* <Main /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
