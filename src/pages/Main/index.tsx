import S from 'pages/Main/styles';
import MainTitle from './MainTitle';
import MainService from './MainService';
import MainStrength from './MainStrength';
import MainReview from './MainReview';
import MainClients from './MainClients';
import MainExperts from './MainExperts';

export default function Main(): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <MainTitle />
      <MainService />
      <MainClients />
      <MainExperts />
      <MainReview />
      <MainStrength />
    </S.Wrapper>
  );
}
