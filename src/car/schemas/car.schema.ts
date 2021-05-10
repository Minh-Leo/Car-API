import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  colour: String,
  model: String,
});
