import { Document } from 'mongoose';

export interface ICar extends Document {
  readonly id: number;
  readonly brand: string;
  readonly colour: string;
  readonly model: string;
}
