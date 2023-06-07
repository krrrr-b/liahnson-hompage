import S from 'pages/Careers/styles';
import CareerTitle from './CareerTitle';
import CareerImages from './CareerImages';
import CareerInterview from './CareerInterview';

export default function Careers(): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <CareerTitle />
      <CareerImages />
      <CareerInterview />
    </S.Wrapper>
  );
}
