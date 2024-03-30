import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
`;

export const Header = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LinkToBack = styled.button`
  height: 45px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  color: #000;
  cursor: pointer;
`;

export const ToggleButtonSound = styled.button`
  height: 45px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
`;

export const ColorList = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: start;
  justify-content: end;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PaletteName = styled.h2`
  line-height: 45px;
  color: #000;
  font-size: 16px;
`;
