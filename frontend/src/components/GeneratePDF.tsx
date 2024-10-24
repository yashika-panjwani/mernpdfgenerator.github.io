
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createInvoice } from '../features/productSlice';
import { RootState } from '../store';

const GeneratePDF: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products); 
  const user = useSelector((state: RootState) => state.auth.user);

  const handleGeneratePDF = async () => {
    if (products.length > 0 && user) {
      await dispatch(createInvoice({ products, user }));
    } else {
      console.error('Products or user not found!');
    }
  };

  return (
    <div className="container">
      <button onClick={handleGeneratePDF}>Generate Invoice PDF</button>
    </div>
  );
};

export default GeneratePDF;
