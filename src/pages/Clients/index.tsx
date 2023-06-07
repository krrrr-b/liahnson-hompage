import S from 'pages/Clients/styles';
import ClientsTitle from './ClientsTitle';
import ClientCoverage from './ClientCoverage';
import ClientCompliances from './ClientCompliances';
import ClientReviews from './ClientReviews';

export default function Clients(): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <ClientsTitle />
      <ClientCoverage />
      <ClientCompliances />
      <ClientReviews />
    </S.Wrapper>
  );
}
