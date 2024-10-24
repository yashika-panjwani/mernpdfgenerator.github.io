
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


interface Product {
  name: string;
  qty: number;
  rate: number;
  gst: number;
  total: number;
}

interface Invoice {
  _id: string;
  products: Product[];
  user: any; 
  createdAt: string;
}

interface ProductState {
  products: Product[]; 
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  products: [],
  invoices: [],
  loading: false,
  error: null,
};

// Async action to handle invoice creation
export const createInvoice = createAsyncThunk(
  'product/createInvoice',
  async ({ products, user }: { products: Product[]; user: any }) => {
    const response = await axios.post('/api/invoice', { products, user });
    return response.data; 
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addNewProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInvoice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createInvoice.fulfilled, (state, action: PayloadAction<Invoice>) => {
        state.loading = false;
        state.invoices.push(action.payload); 
      })
      .addCase(createInvoice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create invoice'; 
      });
  },
});


export const { addNewProduct } = productSlice.actions;

export default productSlice.reducer;

