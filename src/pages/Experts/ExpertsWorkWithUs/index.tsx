import { Container, Inner } from 'components/shared';
import S from 'pages/Experts/ExpertsWorkWithUs/style';
import { useTranslation } from "react-i18next";
import i18n from "languages/i18n";

export default function ExpertsTitle(): ReturnType<React.FunctionComponent> {
  const { t } = useTranslation()
  const isKR = i18n.language === "ko";

  const howWork = [
    {
      index: '01',
      title: isKR ? '프로필 등록' : 'Profile Registration',
      content: isKR ? '이안손 플랫폼 접속 후 세부 이력서함 및 전문 분야를 등록합니다.' : 'After accessing the Liahnson platform, you can enter your detailed background and expertise in specific fields.'
    },
    {
      index: '02',
      title: isKR ? '프로젝트 수락' : 'Project Request',
      content: isKR ? '전문가님의 전문성에 부합하는 프로젝트가 있을 경우, 프로젝트 매니저가 연락드립니다.' : 'Once we identify a project that matches your expertise, a project manager will contact you.',
    },    {
      index: '03',
      title: isKR ? '스크리닝' : 'Screening',
      content: isKR ? '프로젝트 확인 및 스크리닝 질문에 대한 피드백을 보내주시면 고객사와 최종 진행 여부를 확인하여 일정을 조율드립니다.' : 'Upon your review of the project and your feedback on the screening questions, we will confirm with the client whether they want to proceed with the consultation and schedule it accordingly.'
    },
    {
      index: '04',
      title: isKR ? '자문료 지급' : 'Consultation Fee',
      content: isKR ? '프로젝트 완료 후, 10일 이내 자문료를 지급드립니다.' : 'After completing a consultation, you will receive the consultation fee within 10 days.'
    },
  ]

  return (
    <S.Title>
      <Container>
        <Inner>
          <S.TitleText>How Experts Work With Us</S.TitleText>
          
          { howWork.map(item => (
            <S.DescriptionBox key={item.index}>
              <S.Number>{item.index}/</S.Number>
              
              <S.DescriptionContent>
              <S.ContentTitle>{item.title}</S.ContentTitle>
              <S.ContentDetail>{item.content}</S.ContentDetail>
              </S.DescriptionContent>

            </S.DescriptionBox>
          ))}
        </Inner>
      </Container>
    </S.Title>
  );
}