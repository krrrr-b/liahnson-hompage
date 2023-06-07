import { Container, Inner } from 'components/shared';
import S from 'pages/Clients/ClientCompliances/styles';
import { useTranslation } from "react-i18next";

export default function ClientCompliances(): ReturnType<React.FunctionComponent> {
  const { t } = useTranslation()

  return (
    <S.Compliance>
      <Container>
        <Inner>
          <S.Wrapper>
            <S.Title>Client Compliances</S.Title>
            <S.Description style={{wordBreak: 'keep-all'}}>
              {t('client_compliances')}
            </S.Description>
          </S.Wrapper>
        </Inner>
      </Container>
    </S.Compliance>
  );
}
