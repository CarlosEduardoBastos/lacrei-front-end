/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const mediaQuery = () => css`
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 0.625rem;
  }
`;

export const Container = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    font-size: ${theme.fonts.sizes.small};
    font-weight: 700;
    transition: all 0.2s ease 0s;
    padding: 0 1.25rem;
    line-height: 22px;

    &:hover {
      color: ${theme.colors.secondaryColorHover};
    }

    &.active {
      color: ${theme.colors.primaryColor};
    }
    ${mediaQuery()}
  `}
`;
