import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import GeneratePDF from './components/GeneratePDF';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/generate-pdf" element={<GeneratePDF />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
