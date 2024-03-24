import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px 20px;

  @media screen and (max-width: 991px) {
    justify-content: center;
  }
`;
