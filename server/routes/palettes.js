import express from 'express';

import { getAllPalettes, getPaletteById } from '../controllers/palettes.js';
import isValidId from '../middlewares/isValidId.js';

const palettesRouter = express.Router();

palettesRouter.get('/', getAllPalettes);

palettesRouter.get('/:id', isValidId, getPaletteById);

export default palettesRouter;
