import { GridContent } from '../../components/GridContent';
import * as Styled from './styles';
import ImageUser from '../../assets/pessoaUsuariaImg.16f76b21.svg';

export const UserPerson = () => {
  return (
    <Styled.Container>
      <GridContent
        title="Pessoa Usuária"
        text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        haveButton={false}
        border={true}
        src={ImageUser}
      />
    </Styled.Container>
  );
};
