import { GridContent } from '../../components/GridContent';
import * as Styled from './styles';
import ImageProfissional from '../../assets/profissional.6700284d.svg';

export const Profissional = () => {
  return (
    <Styled.Container>
      <GridContent
        title="Profissional"
        text="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
        haveButton={false}
        border={true}
        src={ImageProfissional}
      />
    </Styled.Container>
  );
};
