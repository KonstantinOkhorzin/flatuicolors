import { model } from 'mongoose';

import { paletteSchema } from '../schemas/palette.js';

const Palette = model('palette', paletteSchema);

export default Palette;
