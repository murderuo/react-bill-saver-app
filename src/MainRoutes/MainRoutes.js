import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Electricity from '../pages/Electricity';
import Water from '../pages/Water';
import Gas from '../pages/Gas';
import Telekom from '../pages/Telekom';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/elektrik" element={<Electricity />} />
        <Route path="/water" element={<Water />} />
        <Route path="/gas" element={<Gas />} />
        <Route path="/telekom" element={<Telekom />} />
        {
          <Route
            path="*"
            element={
              <main style={{ display: 'flex', justifyContent: 'center' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        }
      </Routes>
    </>
  );
}

export default MainRoutes;
