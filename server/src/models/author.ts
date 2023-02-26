import { Schema, model } from 'mongoose';

interface IAuthor {
  email: string;
  fname: string;
  lname: string;
}

const authorSchema = new Schema<IAuthor>({
  email: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
}, { timestamps: true });

const modelAuthor = model<IAuthor>('authors', authorSchema);

export default modelAuthor;