import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import ScrollingImages from 'components/base/ScrollingImages';
import MobileList from 'components/domain/MobileList';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Main/MainClients/styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import consult_cp_image from 'assets/images/consult_cp.jpg';
import invest_cp_image from 'assets/images/invest_cp.jpg';
import cp_image from 'assets/images/cp.jpg';
import research_cp_image from 'assets/images/research_cp.jpg';
import start_cp_image from 'assets/images/start_cp.jpg';

export default function MainClients(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const navigate = useNavigate();
  const { t } = useTranslation()

  const routeChange = (path: string) => {
    navigate(path);
  }

  const mobileListItems = [
    {
      count: i18n.language === "ko" ? '70' : '70',
      label: t('consulting_firms'),
    },
    {
      count: i18n.language === "ko" ? '20' : '20',
      label: t('research_firms'),
    },
    {
      count: i18n.language === "ko" ? '50' : '50',
      label: t('investment_firms'),
    },
    {
      count: i18n.language === "ko" ? '100' : '100',
      label: t('corporate_clients'),
    },
    {
      count: i18n.language === "ko" ? '20' : '20',
      label: t('startup_clients'),
    },
  ];

  // 배열의 순서는 left 순서대로 넣어주어야 정상적으로 동작합니다.
  // order는 위에서부터의 순서입니다.
  const imagesData = [
    {
      src: cp_image,
      top: '48%',
      left: '5%',
      start: 100,
      number: 100,
      unit: i18n.language === "ko" ? '' : '',
      order: 3,
      target: t('corporate_clients'),
    },
    {
      src: research_cp_image,
      top: '24%',
      left: '27%',
      number: 20,
      start: 20,
      unit: i18n.language === "ko" ?'' : '',
      order: 1,
      target: t('research_firms'),
    },
    {
      src: start_cp_image,
      top: '55%',
      left: '45%',
      number: 20,
      start: 20,
      unit: i18n.language === "ko" ?'' : '',
      order: 4,
      target: t('startup_clients'),
    },
    {
      src: consult_cp_image,
      top: '7%',
      left: '53%',
      number: 70,
      start: 70,
      unit: i18n.language === "ko" ?'' : '',
      order: 0,
      target: t('consulting_firms'),
    },
    {
      src: invest_cp_image,
      top: '35%',
      left: '75%',
      number: 50,
      start: 50,
      unit: i18n.language === "ko" ?'' : '',
      order: 2,
      target: t('investment_firms'),
    },
  ];

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.TitleWrapper>
            <S.Title>Our Clients</S.Title>
            <S.DescriptionWrapper>
              <S.Description style={{wordBreak: 'keep-all'}}>
                {t('main_page_client_1')}
                {t('main_page_client_2')}
              </S.Description>
              <ArrowButton
                name='Discover more'
                color={BUTTON_COLORS.TRANSPARENT_WHITE}
                onClick={() => {
                  routeChange(LINKS.CLIENTS)
                }}
              />
            </S.DescriptionWrapper>
          </S.TitleWrapper>
          {isMobile && <MobileList items={mobileListItems} />}
        </Inner>
      </Container>
      {!isMobile && <ScrollingImages items={imagesData} requireAnimation={false} requireDescription={false}/>}

      <Container>
        <Inner>
          <S.BottomWrapper>
            {!isMobile && <i></i>}
            <S.BottomDescriptionWrapper>
              <S.BottomDescription style={{wordBreak: 'keep-all'}}>
              {t('service_dozen_of_consultations_1')} {t('service_dozen_of_consultations_2')}
              </S.BottomDescription>
              <ArrowButton
                name='Become our Client'
                width={isMobile ? '19rem' : ''}
                color={BUTTON_COLORS.WHITE}
                onClick={() => {
                  if (isMobile) {
                    window.location.href = LINKS.TYPE_FORM_CLIENTS;
                  } else {
                    window.open(LINKS.TYPE_FORM_CLIENTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                  }
                }}
              />
            </S.BottomDescriptionWrapper>
          </S.BottomWrapper>
        </Inner>
      </Container>
    </S.Wrapper>
  );
}
