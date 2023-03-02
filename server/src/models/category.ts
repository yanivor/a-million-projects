import { Schema, model } from 'mongoose';

interface ICategory {
  name: string;
  title: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true, unique: true },
}, { timestamps: true });

const modelCategory = model<ICategory>('categorys', categorySchema);

export default modelCategory;