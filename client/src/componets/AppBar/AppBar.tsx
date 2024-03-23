import Container from '../Container';
import { Header, Logo } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <Logo>
          <a href='/'>FLAT UI COLORS</a>
        </Logo>
      </Container>
    </Header>
  );
};

export default AppBar;
