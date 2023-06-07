import { IconName } from 'assets/icons';
import Button from 'components/base/Button';
import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Main/MainTitle/styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";
import mainPageVideo from 'assets/images/mainPageVideo.mov';

export default function MainTitle(): ReturnType<React.FunctionComponent> {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const { isMobile } = useContext(MediaQueryContext);

  const routeChange = (path: string) => {
    navigate(path);
  }

  return (
    <S.Title>
      <Container>
        <Inner>
          <S.Header>
            <S.HeaderDescription>
              All the world&apos;s knowledge,
              <br />
              <S.DescriptionHover>just</S.DescriptionHover> an hour away
            </S.HeaderDescription>
            <S.HeaderButtonBox>
              {isMobile ? (
                <>
                  <Button
                    color={BUTTON_COLORS.RED}
                    width='19rem'
                    height='4.5rem'
                    fontSize='1.5rem'
                    onClick={() => {
                      if (isMobile) {
                        window.location.href = LINKS.TYPE_FORM_CLIENTS;
                      } else {
                        window.open(LINKS.TYPE_FORM_CLIENTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                      }
                    }}>
                    Become our Client
                  </Button>
                  <Button
                    color={BUTTON_COLORS.RED}
                    width='19rem'
                    height='4.5rem'
                    fontSize='1.5rem'
                    onClick={() => {
                      if (isMobile) {
                        window.location.href = LINKS.TYPE_FORM_EXPERTS;
                      } else {
                        window.open(LINKS.TYPE_FORM_EXPERTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                      }
                    }}>
                    Become our Expert
                  </Button>
                </>
              ) : (
                <>
                  {' '}
                  <Button
                    color={BUTTON_COLORS.RED}
                    width='27.5rem'
                    height='8.74rem'
                    fontSize='2.5rem'
                    onClick={() => {
                      if (isMobile) {
                        window.location.href = LINKS.TYPE_FORM_CLIENTS;
                      } else {
                        window.open(LINKS.TYPE_FORM_CLIENTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                      }
                    }}>
                    Become our Client
                  </Button>
                  <Button
                    color={BUTTON_COLORS.RED}
                    width='27.5rem'
                    height='8.74rem'
                    fontSize='2.5rem'
                    onClick={() => {
                      if (isMobile) {
                        window.location.href = LINKS.TYPE_FORM_EXPERTS;
                      } else {
                        window.open(LINKS.TYPE_FORM_EXPERTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                      }
                    }}>
                    Become our Expert
                  </Button>
                </>
              )}
            </S.HeaderButtonBox>
            <S.ScrollWrapper>
              <S.ScrollAnimation>Scroll</S.ScrollAnimation>
            </S.ScrollWrapper>
          </S.Header>
        </Inner>
      </Container>
      <S.ImageBox>
        <S.TitleVideo src={mainPageVideo} autoPlay={true} loop muted />
      </S.ImageBox>
      <S.Description>
        <Container>
          <Inner>
            <S.DescriptionTitle style={{wordBreak: 'keep-all'}}>
              {isMobile ? (<></>) : t('main_page_about_1')}
              {isMobile ? (
                <Icon name={IconName.Remember} width='14rem' height='2.2rem' />
              ) : (
                <Icon name={IconName.Remember} width='25rem' height='4.1rem' />
              )}
              <p>{t('main_page_about_1_5')}</p>
            </S.DescriptionTitle>
            <S.DescriptionTitle style={{wordBreak: 'keep-all'}}>
              {t('main_page_about_2')}{t('main_page_about_2_1')}
            </S.DescriptionTitle>
            <S.DescriptionContents style={{wordBreak: 'keep-all'}}>
              {isMobile ? (t('main_page_about_3')) : ''}
              {!isMobile ? (t('main_page_about_3')) : ''}
            </S.DescriptionContents>
            <S.DescriptionButtonBox>
              <ArrowButton
                name='Discover more'
                color={BUTTON_COLORS.WHITE}
                onClick={() => {
                  routeChange(LINKS.ABOUT)
                }}
              />
            </S.DescriptionButtonBox>
          </Inner>
        </Container>
      </S.Description>
    </S.Title>
  );
}
