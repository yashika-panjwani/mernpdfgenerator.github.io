import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  quantity: number;
  rate: number;
  total: number;
  gst: number;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  total: { type: Number, required: true },
  gst: { type: Number, required: true },
});

export const Product = mongoose.model<IProduct>('Product', productSchema);
