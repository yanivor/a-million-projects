import { Schema, model, Types } from 'mongoose';

interface IPost {
  title: string;
  date: string;
  path: string;
  image: string;
  description: string;
  content: string;
  authorId: Types.ObjectId;
  categoryId: Types.ObjectId;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  path: { type: String, required: true, unique: true },
  image: { type: String },
  content: { type: String, required: true },
  description: { type: String },
  authorId: { type: Schema.Types.ObjectId },
  categoryId: { type: Schema.Types.ObjectId },
}, { timestamps: true });

const modelPost = model<IPost>('posts', postSchema);

export default modelPost;