import styled from '@emotion/styled';

interface StyledMessageProps {
  align: string;
  color: string;
}

export const StyledMessage = styled.p<StyledMessageProps>`
  font-size: 24px;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;
