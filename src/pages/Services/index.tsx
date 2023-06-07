import S from 'pages/Services/styles';
import ServiceTitle from './ServiceTitle';
import ServiceStrength from './ServiceStrength';
import ServiceReview from './ServiceReview';

export default function Services(): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <ServiceTitle />
      <ServiceStrength />
      <ServiceReview />
    </S.Wrapper>
  );
}
