import { FC, useState } from 'react';

import { IPalette } from '../../types';
import { Card, ColorList, ColorItem, CardFooter, CardTitle } from './PaletteCard.styled';
import Modal from '../Modal';
import Colors from '../Colors';

interface Props {
  palette: IPalette;
}

const PaletteCard: FC<Props> = ({ palette }) => {
  const { colors, paletteName, emoji } = palette;
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onToggleModal = () => setOpenModal(state => !state);

  return (
    <>
      <Card onClick={onToggleModal}>
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
      {openModal && (
        <Modal>
          <Colors onCloseModal={onToggleModal} palette={palette} />
        </Modal>
      )}
    </>
  );
};

export default PaletteCard;
