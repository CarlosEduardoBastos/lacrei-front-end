import { Heading } from '../../components/Heading';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Heading size="medium">404</Heading>
        <Styled.Text>This page could not be found.</Styled.Text>
      </SectionContainer>
    </Styled.Container>
  );
};
