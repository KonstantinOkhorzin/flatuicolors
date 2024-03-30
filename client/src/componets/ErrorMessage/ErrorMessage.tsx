import { FC } from 'react';
import { StyledMessage } from './ErrorMessage.styled';

interface Props {
  text: string;
  align?: string;
  color?: string;
}

const ErrorMessage: FC<Props> = ({ text, align = 'center', color = '#ff3f34' }) => {
  return (
    <StyledMessage align={align} color={color}>
      {text}
    </StyledMessage>
  );
};

export default ErrorMessage;
