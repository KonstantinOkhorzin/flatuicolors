import { FC, ReactNode } from 'react';

import { StyledContainer } from './Container.styled';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
