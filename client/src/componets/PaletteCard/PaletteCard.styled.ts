import styled from '@emotion/styled';

export const Card = styled.li`
  width: 307px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 151px 1fr;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 10px 0 10px;
  cursor: pointer;
`;

export const ColorList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border-radius: 4px;
`;

interface ColorItemProps {
  bgColor: string;
}

export const ColorItem = styled.li<ColorItemProps>`
  background-color: ${({ bgColor }) => bgColor};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  color: #000;
  font-size: 15px;
  letter-spacing: 0.55px;
`;
