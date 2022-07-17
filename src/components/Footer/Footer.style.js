import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Wrapper = styled.div`
  padding: 70px 45px;
  background-color: ${({ bg }) => bg || COLOR.primary3};
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FooterLinks = styled.ul`
  width: 100%;

  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* @media (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;
export const Link = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${COLOR.primary2[2]};
`;

export const FooterLinkItem = styled.li`
  width: 100%;
`;
