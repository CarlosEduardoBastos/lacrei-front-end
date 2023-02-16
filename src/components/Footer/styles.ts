
import styled, { css } from 'styled-components';
import { Container as Link } from '../Link/styles';

export const Container = styled.footer`
  
`;

export const NavLink = styled.div`
  ${({ theme }) => css`
    ${Link} {
      opacity: 0.7;
      &.active {
        color: ${theme.colors.secondaryColor};
        opacity: 1;
      }
    }
  `}
`;

export const NavIcon = styled.div`
  margin: 24px 0;
`;

export const Icon = styled.a`
  padding: 0 1.25rem;
  
`;

export const Text = styled.p`
  ${({ theme }) =>
    css`
      font-size: 0.75rem;
      color: ${theme.colors.colorText};
    `}
`;

export const Content = styled.div`
  border-top: 1px solid #b0e0d3;
  padding-top: 2rem;
  
`;
