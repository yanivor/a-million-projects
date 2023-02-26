import { Schema, model } from 'mongoose';

interface IImage {
  url: string;
  name: string;
  label?: string;
}

const imageSchema = new Schema<IImage>({
  url: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  label: { type: String },
}, { timestamps: true });

const modelImage = model<IImage>('images', imageSchema);

export default modelImage;