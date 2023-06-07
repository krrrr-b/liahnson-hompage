import S from 'pages/Experts/styles';
import ExpertsTitle from './ExpertsTitle';
import ExpertsCompliances from './ExpertsCompliances';
import HoverList from './HoverList';
import BlurScroll from './BlurScroll';
import ExpertsCoverage from './ExpertsCoverage';
import ExpertsInterviews from './ExpertsInterviews';

export default function Experts(): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <ExpertsTitle />
      <BlurScroll />
      <HoverList />
      <ExpertsCoverage />
      <ExpertsInterviews />
      <ExpertsCompliances />
    </S.Wrapper>
  );
}
