import styled from '@emotion/styled';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  min-height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Message = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -120px;
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.2);
  text-align: center;
  font-size: 120px;
  color: #ecf0f1;
  text-shadow: 2px 2px #2c3e50;
  padding: 30px 0;
  span {
    top: 50%;
    text-shadow: 1px 1px #444;
    height: 60px;
    margin-top: 120px;
    position: absolute;
    color: #ecf0f1;
    display: block;
    width: 100%;
    font-size: 32px;
  }
`;
