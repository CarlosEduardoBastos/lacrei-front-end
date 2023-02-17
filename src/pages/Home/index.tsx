import { GridContent } from '../../components/GridContent';
import * as Styled from './styles';
import ImageHome from '../../assets/home.87217388.svg';

export const Home = () => {
  return (
    <Styled.Container>
      <GridContent
        title="Boas vindas a Lacrei Saúde"
        text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        src={ImageHome}
        haveButton={true}
      />
    </Styled.Container>
  );
};
