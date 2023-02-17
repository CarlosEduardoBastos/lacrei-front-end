import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

const mediaQuery = () => css`
  @media (max-width: 520px) {
    justify-content: center;
  }
`;

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.colorHeader};
    padding: 0.5rem 4rem;

    ${SectionContainer} {
      padding: 0;
    }
  `}
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${mediaQuery()}
`;

export const NavLink = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
