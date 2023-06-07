import { Container, Inner } from 'components/shared';
import S from 'pages/Experts/ExpertsTitle/styles';
import { useTranslation } from "react-i18next";

export default function ExpertsTitle(): ReturnType<React.FunctionComponent> {
  const { t } = useTranslation();

  return (
    <S.Title>
      <Container>
        <Inner>
          <S.TitleText>Our Experts</S.TitleText>
          <S.DescriptionBox>
            <S.Description>Building bridges between</S.Description>
          </S.DescriptionBox>
          <S.DescriptionBox>
            <S.Description>expertise and opportunity</S.Description>
          </S.DescriptionBox>
          <S.BottomBox>
            <S.BottomLeft style={{wordBreak: 'keep-all'}}>
              {t('expert_page_our_experts_description')}<br/>{t('expert_page_our_experts_description1')}
            </S.BottomLeft>
            {/* <S.BottomRight style={{wordBreak: 'keep-all'}}>
            </S.BottomRight> */}
          </S.BottomBox>
        </Inner>
      </Container>
    </S.Title>
  );
}
