import { Schema } from 'mongoose';

const colorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

export const paletteSchema = new Schema(
  {
    paletteName: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    colors: [colorSchema],
  },
  { versionKey: false }
);
