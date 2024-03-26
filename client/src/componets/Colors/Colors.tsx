import { FC } from 'react';

import { Container, Header, LinkToBack,ColorList, Footer, PaletteName } from './Colors.styled';
import { IPalette } from '../../types';
import ColorCard from '../ColorCard';

interface Props {
  onCloseModal: () => void;
  palette: IPalette;
}

const Colors: FC<Props> = ({ onCloseModal, palette: { paletteName, emoji, colors } }) => {
  return (
    <Container>
      <Header>
        <LinkToBack onClick={onCloseModal}>
          <span>←</span>Back
        </LinkToBack>
      </Header>
      <main>

          <ColorList>
            {colors.map(color => (
              <ColorCard key={color._id} color={color} />
            ))}
          </ColorList>

      </main>
      <Footer>
        <PaletteName>
          {paletteName} <span>{emoji}</span>
        </PaletteName>
      </Footer>
    </Container>
  );
};

export default Colors;
