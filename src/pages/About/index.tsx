import S from 'pages/About/styles';
import AboutTitle from './AboutTitle';
import AboutDescription from './AboutDescription';
import AboutVision from './AboutVision';

export default function About(): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <AboutTitle />
      <AboutDescription />
      <AboutVision />
    </S.Wrapper>
  );
}
