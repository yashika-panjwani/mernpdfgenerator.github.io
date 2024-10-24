import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (formData: any) => API.post('/auth/login', formData);
export const register = (formData: any) => API.post('/auth/register', formData);
export const addProduct = (formData: any) => API.post('/products/add', formData);
export const generateInvoice = (data: any) => API.post('/products/generate', data);
