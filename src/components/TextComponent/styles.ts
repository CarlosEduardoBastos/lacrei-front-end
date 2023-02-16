import styled, { css, DefaultTheme } from 'styled-components';

const mediaFont = (theme: DefaultTheme) => css`
  @media (max-width: 1039px) {
    font-size: ${theme.fonts.sizes.small};
    margin-top: 1rem;
  }
`;

export const Container = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.colorText};
    font-size: ${theme.fonts.sizes.medium};
    margin-top: 2rem;
    ${mediaFont(theme)}
  `}
`;
