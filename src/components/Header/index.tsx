import { Link } from '../Link';
import { LogoLink } from '../LogoLink';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink text="Lacrei" to="/" />
          <Styled.NavLink>
            <Link text="Home" to="/" />
            <Link text="Pessoa Usuária" to="/user-person" />
            <Link text="Profissional" to="/profissional" />
          </Styled.NavLink>
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};
