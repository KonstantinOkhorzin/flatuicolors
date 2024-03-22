import Palette from '../models/palette.js';
import HttpError from '../helpers/HttpError.js';

export const getAllPalettes = async (_, res, next) => {
  try {
    const palettes = await Palette.find();
    res.json(palettes);
  } catch (error) {
    next(error);
  }
};

export const getPaletteById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const palette = await Palette.findById(id);

    if (!palette) {
      throw HttpError(404);
    }

    res.json(palette);
  } catch (error) {
    next(error);
  }
};
