import styled from 'styled-components';
import { Container as Heading } from '../../components/Heading/styles';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${SectionContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Heading} {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      padding: 0 23px 0 0;
    }
  }
`;

export const Text = styled.div`
  padding: 0 0 0 23px;
  font-size: 0.875rem;
`;
