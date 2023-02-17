import * as Styled from './styles';

export type ButtonProps = {
  text: string;
  to: string;
  background?: 0 | 1;
};

export const Button = ({ text, to, background = 1 }: ButtonProps) => {
  return (
    <Styled.Container to={to} background={background ? 1 : 0}>
      {text}
    </Styled.Container>
  );
};

