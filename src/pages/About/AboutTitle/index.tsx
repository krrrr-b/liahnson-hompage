import { IconName } from 'assets/icons';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/About/AboutTitle/styles';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "languages/i18n";

export default function AboutTitle(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation();

  const isKorean = i18n.language === "ko";

  return (
    <S.Title>
      <Container>
        <Inner>
          <S.TitleText>About Us</S.TitleText>
          <S.DescriptionBox>
            <S.Description style={{wordBreak: 'keep-all'}}>
            <p>{isMobile ? (<></>) : t('main_page_about_1')}</p>&nbsp;
            {isMobile ? (
                isKorean ? <Icon
                name={IconName.RememberFilled}
                width={isMobile ? '16.4rem' : '27.8rem'}
                height={isMobile ? '2.7rem' : '4.6rem'}
                color={BUTTON_COLORS.WHITE}
              /> : <></>
              ) : (
                <Icon
                name={IconName.RememberFilled}
                width={isMobile ? '16.4rem' : '27.8rem'}
                height={isMobile ? '2.7rem' : '4.6rem'}
                color={BUTTON_COLORS.WHITE}
              />
              )}
              <p>{t('main_page_about_1_5')}</p>
            </S.Description>
            <S.Description style={{wordBreak: 'keep-all'}}>
              {t('main_page_about_2')}
              <br/>
              {t('main_page_about_2_1')}
            </S.Description>
          </S.DescriptionBox>
        </Inner>
      </Container>
    </S.Title>
  );
}
