
import * as Styled from './styles';
export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'| 'h6';
  size?: 'small'| 'medium'| 'big';
};
export const Heading = ({ children, as = 'h2', size = 'big' }: HeadingProps) => {
  return (
    <Styled.Container as={as} size={size}>
      {children}
    </Styled.Container>
  );
};


