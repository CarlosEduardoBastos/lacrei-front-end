import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media (max-width: 1039px) {
    font-size: ${theme.fonts.sizes.large};
  }
`;

export const Container = styled.h1<HeadingProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.secondaryColor};
    font-weight: bold;
    ${size ? titleSize[size](theme) : null}
  `}
`;
