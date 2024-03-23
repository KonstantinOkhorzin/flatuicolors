import { FC } from 'react';

import { IPalette } from '../../types';
import { Card, ColorList, ColorItem, CardFooter, CardTitle } from './PaletteCard.styled';

interface Props {
  palette: IPalette;
}

const PaletteCard: FC<Props> = ({ palette: { colors, paletteName, emoji } }) => {
  return (
    <Card>
      <ColorList>
        {colors.map(({ _id, color }) => (
          <ColorItem key={_id} bgColor={color} />
        ))}
      </ColorList>
      <CardFooter>
        <CardTitle>{paletteName}</CardTitle>
        <p>{emoji}</p>
      </CardFooter>
    </Card>
  );
};

export default PaletteCard;
