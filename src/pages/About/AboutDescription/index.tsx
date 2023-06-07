import BackgroundText from 'components/base/BackgroundText';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/About/AboutDescription/styles';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import service_shot from 'assets/images/service_shot.jpg';
import about_1 from 'assets/images/about_1.jpg';
import about_2 from 'assets/images/about_2.jpg';
import about_3 from 'assets/images/about_3.jpg';

export default function ServiceStrength(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation();

  return (
    <S.Description>
      <S.DescriptionImage src={service_shot} />
      <BackgroundText upper='we’re experts' lower='in what we do' />
      <S.Container>
        <Inner>
          <S.RightMargin>
            <S.IntroductionWrapper>
              <S.DescriptionTitle>Who we are</S.DescriptionTitle>
              <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
                {t('about_page_about_3')}
              </S.DescriptionContent>
            </S.IntroductionWrapper>
          </S.RightMargin>

          <S.LeftMargin>
            <S.IntroductionWrapper>
              <S.DescriptionTitle>What we do</S.DescriptionTitle>
              <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
                {t('about_page_about_4')}
              </S.DescriptionContent>
            </S.IntroductionWrapper>
          </S.LeftMargin>

          {!isMobile && (
            <S.ImageWrapper>
              <S.UpperImage src={about_1} />
              <S.LowerImage src={about_2} />
            </S.ImageWrapper>
          )}

          <S.RightBottomMargin>
            <S.IntroductionWrapper>
              <S.DescriptionTitle>How we work</S.DescriptionTitle>
              <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
                {t('about_page_about_5')}
              </S.DescriptionContent>
            </S.IntroductionWrapper>
          </S.RightBottomMargin>

          <S.BottomDescriptionImage src={about_3} />
        </Inner>
      </S.Container>
      {isMobile && (
        <S.ImageWrapper>
          <S.UpperImage src={about_1} />
          <S.LowerImage src={about_2} />
        </S.ImageWrapper>
      )}
    </S.Description>
  );
}
