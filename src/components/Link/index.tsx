import * as Styled from './styles';

export type LinkProps = {
  text: string;
  to: string
}

export const Link = ({ text, to }: LinkProps) => {
  return <Styled.Container to={to}>{text}</Styled.Container>;
};
