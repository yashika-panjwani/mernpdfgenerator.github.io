
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../features/productSlice';

interface Product {
  name: string;
  qty: number;
  rate: number;
  gst: number;
  total: number;
}

const AddProduct: React.FC = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product>({
    name: '',
    qty: 0,
    rate: 0,
    gst: 0,
    total: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product.name && product.qty > 0 && product.rate > 0) {
      dispatch(addNewProduct(product)); 
      setProduct({ name: '', qty: 0, rate: 0, gst: 0, total: 0 }); 
    } else {
      console.error('Invalid product details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
      <input name="qty" value={product.qty} onChange={handleChange} type="number" placeholder="Quantity" required />
      <input name="rate" value={product.rate} onChange={handleChange} type="number" placeholder="Rate" required />
      <input name="gst" value={product.gst} onChange={handleChange} type="number" placeholder="GST" required />
      <input name="total" value={product.total} onChange={handleChange} type="number" placeholder="Total" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
