import { NavLink } from 'react-router-dom';
import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled(NavLink)`
  ${({ theme, background }:{theme: DefaultTheme, background: Number}) => css`
    font-size: 1.125rem;
    width: 192px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${background ? theme.colors.primaryColor : 'transparent'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${background ? theme.colors.white : theme.colors.primaryColor};
    border-radius: 8px;
    border: ${background ? 'none' : '2px solid #018762'};
    transition: all 0.2s ease 0s;
    font-weight: 700;
    margin: 10px 0;

    &:hover {
      opacity: 0.7;
    }
  `}
`;
