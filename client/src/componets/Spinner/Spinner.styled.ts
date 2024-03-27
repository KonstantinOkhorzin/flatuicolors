import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animation = keyframes`
  0% {
    transform: scale(1) rotate(0deg); 
  }
  50% {
    transform: scale(1.5) rotate(180deg); 
  }
  100% {
    transform: scale(1) rotate(360deg); 
  }
`;

export const StyledSpinner = styled.svg`
  display: block;
  margin: 0 auto;
  animation: ${animation} 1s ease-in-out infinite;
`;
