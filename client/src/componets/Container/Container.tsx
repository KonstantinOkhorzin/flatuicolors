import { FC, ReactElement } from 'react';

import { StyledContainer } from './Container.styled';

interface Props {
  children: ReactElement;
}

const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
