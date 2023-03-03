import { Schema, model } from 'mongoose';

interface ICode {
  content: string;
  name: string;
  type: string;
}

const codeSchema = new Schema<ICode>({
  content: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
}, { timestamps: true });

const modelCode = model<ICode>('codes', codeSchema);

export default modelCode;