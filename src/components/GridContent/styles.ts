import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

const mediaQuery = () => css`
  @media (max-width: 1088px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  padding-top: 4rem;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mediaQuery()};
`;
export const ContentText = styled.div`
  ${({ border }:{border: boolean}) => css`
    max-width: 453px;
    ${TextComponent} {
      ${() =>
        border
          ? css`
              border-left: 5px solid rgb(1, 135, 98);
              padding: 0 17px;
            `
          : ''}
    }
  `}
`;

export const ContentImage = styled.div`
  max-width: 540px;
`;
export const Image = styled.img`
  width: 100%;
`;
export const ContentButton = styled.div`
  max-width: 453px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  flex-wrap: wrap;
  ${mediaQuery()}
`;
