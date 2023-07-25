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
import project from 'assets/icons/project.svg';
import callender from 'assets/icons/callender.svg';
import industry from 'assets/icons/industry.svg';
import handshake from 'assets/icons/handshake.svg';
import people from 'assets/icons/people.svg';
import people2 from 'assets/icons/people2.svg';

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

  const clientsItem = [
    {
      img: project,
      score: '100k',
      span: '+',
      label: i18n.language === "ko" ? '누적 프로젝트 수' : 'The cumulative number of projects'
    },
    {
      img: callender,
      score: '11k',
      span: '+',
      label: i18n.language === "ko" ? '연평균 수행 프로젝트 수' : 'Average number of projects per year'
    },
    {
      img: industry,
      score: '50',
      span: '+',
      label: i18n.language === "ko" ? '고객 산업 분야' : 'Client industry sectors'
    },
    {
      img: handshake,
      score: '99',
      span: '%',
      label: i18n.language === "ko" ? '재계약율' : 'Re-contracting rate'
    },
    {
      img: people,
      score: '600',
      span: '+',
      label: i18n.language === "ko" ? '누적 누적 고객 수' : 'The cumulative number of clients'
    },
    {
      img: people2,
      score: '80',
      span: '+',
      label: i18n.language === "ko" ? '연평균 신규 고객 수' : 'Annual average number of clients acquisitions'
    },

  ]
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
          <S.ContentBox>
          {clientsItem.map(item => (
              <S.Content>
                <img src={item.img} alt={item.label}></img>
                <p>{item.score}
                <span>{item.span}</span>
                </p>
                <p>{item.label}</p>
              </S.Content>
          ))}
          </S.ContentBox>
        </Inner>
      </Container>

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
