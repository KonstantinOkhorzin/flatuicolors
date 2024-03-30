import { FC, useState } from 'react';

import { IColor } from '../../types';
import { Card, CardTitle, CopyText } from './ColorCard.styled';
import Modal from '../Modal';
import FullScreenColor from '../FullScreenColor';

interface Props {
  color: IColor;
}

const ColorCard: FC<Props> = ({ color: { color, name } }) => {
  const [openFullScreenColor, setOpenFullScreenColor] = useState<boolean>(false);

  const onToggleFullScreenColor = () => setOpenFullScreenColor(state => !state);

  return (
    <>
      <Card bgColor={color} onClick={onToggleFullScreenColor}>
        <CopyText />
        <CardTitle>{name}</CardTitle>
      </Card>

      <Modal
        isVisible={openFullScreenColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FullScreenColor color={color} closeFullScreenColor={onToggleFullScreenColor} />
      </Modal>
    </>
  );
};

export default ColorCard;
