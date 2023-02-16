import { Link } from '../Link';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
import FacebookLogo from '../../assets/facebook.svg';
import InstagramLogo from '../../assets/instagram.svg';
import LinkedinLogo from '../../assets/linkedin.svg';

export const Footer = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.Content>
          <Styled.NavLink>
            <Link text="Home" to="/" />
            <Link text="Pessoa Usuária" to="/user-person" />
            <Link text="Profissional" to="/Profissional" />
          </Styled.NavLink>
          <Styled.NavIcon>
            <Styled.Icon target="_blank" href="https://www.instagram.com/lacrei.saude">
              <img src={InstagramLogo} alt="Instagram"/>
            </Styled.Icon>
            <Styled.Icon target="_blank" href="https://www.facebook.com/lacrei.saude">
              <img src={FacebookLogo} alt="Facebook"/>
            </Styled.Icon>
            <Styled.Icon target="_blank" href="https://www.linkedin.com/company/lacrei">
              <img src={LinkedinLogo} alt="Linkedin"/>
            </Styled.Icon>
          </Styled.NavIcon>
          <Styled.Text>Desafio Front-end Lacrei</Styled.Text>
        </Styled.Content>
      </SectionContainer>
    </Styled.Container>
  );
};
