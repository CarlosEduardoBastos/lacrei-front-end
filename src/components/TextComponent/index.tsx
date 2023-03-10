import * as Styled from './styles';

export type TextComponentProps = {
  children: React.ReactNode,
};

export const TextComponent = ({ children }:TextComponentProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

