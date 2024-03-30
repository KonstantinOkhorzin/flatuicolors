import { FC } from 'react';

import {
  Container,
  Header,
  LinkToBack,
  ToggleButtonSound,
  ColorList,
  Footer,
  PaletteName,
} from './Colors.styled';
import { IPalette } from '../../types';
import ColorCard from '../ColorCard';
import { useSoundContext } from '../../hooks/index';

interface Props {
  onCloseModal: () => void;
  palette: IPalette;
}

const Colors: FC<Props> = ({ onCloseModal, palette: { paletteName, emoji, colors } }) => {
  const { soundEnabled, setSoundEnabled } = useSoundContext();
  const onToggleSound = () => setSoundEnabled(state => !state);

  return (
    <Container>
      <Header>
        <LinkToBack onClick={onCloseModal}>
          <span>←</span>Back
        </LinkToBack>
        <ToggleButtonSound onClick={onToggleSound}>
          {soundEnabled ? 'Sound On 🔊' : 'Sound Off 🔇'}
        </ToggleButtonSound>
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
