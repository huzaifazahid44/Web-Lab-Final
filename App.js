
import './App.css';
import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';
import Categories from './categories';

function App() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/categories" element={<Categories />} />
        {/* Other routes */}
      </Routes>
    </div>
  );
};

export default App;
