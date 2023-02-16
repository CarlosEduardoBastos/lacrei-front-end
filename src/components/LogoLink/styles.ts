import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.primaryColor};
    font-weight: 700;
    transition: all 0.2s ease 0s;
    line-height: 44px;

    &:hover {
      color: ${theme.colors.primaryColorHover};
    }
  `}
`;
