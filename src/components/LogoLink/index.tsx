import * as Styled from './styles';

export type LogoLinkProps = {
  text: string;
  to: string;
};

export const LogoLink = ({ text, to }: LogoLinkProps) => {
  return <Styled.Container to={to}>{text}</Styled.Container>;
};


