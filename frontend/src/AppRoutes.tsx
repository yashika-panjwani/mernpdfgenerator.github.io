import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import GeneratePDF from './components/GeneratePDF';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/generate-pdf" element={<GeneratePDF />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
