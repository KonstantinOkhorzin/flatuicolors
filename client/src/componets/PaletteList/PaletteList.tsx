import { FC } from 'react';

import { List } from './PaletteList.styled';
import { IPalette } from '../../types';
import PaletteCard from '../PaletteCard';

interface Props {
  paletteList: IPalette[];
}

const PaletteList: FC<Props> = ({ paletteList }) => {
  return (
    <List>
      {paletteList.map(palette => (
        <PaletteCard key={palette._id} palette={palette} />
      ))}
    </List>
  );
};

export default PaletteList;
