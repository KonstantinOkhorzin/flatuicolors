import { FC } from 'react';

import { IColor } from '../../types';
import { Card, CardTitle, CopyText } from './ColorCard.styled';

interface Props {
  color: IColor;
}

const ColorCard: FC<Props> = ({ color: { color, name } }) => {
  return (
    <Card bgColor={color}>
      <CopyText/>
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};

export default ColorCard;
