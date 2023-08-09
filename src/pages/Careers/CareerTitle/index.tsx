import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Careers/CareerTitle/styles';
import { useContext } from 'react';
import { openMailClient } from 'utils/openEmail';
import { useTranslation } from "react-i18next";
import career_top from 'assets/images/career_top.jpg';

export default function CareerTitle(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation();

  const onClickContactUs = () => {
    openMailClient();
  };

  return (
    <S.Title>
      <Container>
        <Inner>
          <S.TitleText>Careers</S.TitleText>
          <S.Wrapper>
            <div>
              <S.DescriptionBox>
                {isMobile ? (
                  <S.Description>
                    A successful career is just one step away
                  </S.Description>
                ) : (
                  <>
                    <S.Description>A successful career is</S.Description>
                    <S.Description>just one step away</S.Description>
                  </>
                )}
              </S.DescriptionBox>
              <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
                {t('careers_title')}
              </S.DescriptionContent>
            </div>
            <S.CareersImage src={career_top} />
          </S.Wrapper>
          {isMobile && (
            <ArrowButton
              color={BUTTON_COLORS.RED}
              name='Contact us'
              onClick={onClickContactUs}
            />
          )}
        </Inner>
      </Container>
    </S.Title>
  );
}
