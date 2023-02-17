import { Button } from '../Button';
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridContentProps = {
  title: string;
  text: string;
  src: string;
  haveButton?: boolean;
  border?: boolean;
};

export const GridContent = ({ title, text, src, haveButton = true, border = false }: GridContentProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.Grid>
          <Styled.ContentText border={border}>
            <Heading>{title}</Heading>
            <TextComponent>{text}</TextComponent>
            {haveButton && (
              <Styled.ContentButton>
                <Button text="Pessoa Usuária" to="/user-person" />
                <Button text="Profissional" to="/profissional" background={0} />
              </Styled.ContentButton>
            )}
          </Styled.ContentText>
          <Styled.ContentImage>
            <Styled.Image src={src} />
          </Styled.ContentImage>
        </Styled.Grid>
      </SectionContainer>
    </Styled.Container>
  );
};

