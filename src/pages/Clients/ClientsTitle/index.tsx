import ScrollingImages from 'components/base/ScrollingImages';
import MobileList from 'components/domain/MobileList';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Clients/ClientsTitle/styles';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import consult_cp_image from 'assets/images/consult_cp.jpg';
import invest_cp_image from 'assets/images/invest_cp.jpg';
import cp_image from 'assets/images/cp.jpg';
import research_cp_image from 'assets/images/research_cp.jpg';
import start_cp_image from 'assets/images/start_cp.jpg';

export default function ClientsTitle(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation();

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
    unit: i18n.language === "ko" ? '': '',
    order: 3,
    target: t('corporate_clients'),
  },
  {
    src: research_cp_image,
    top: '24%',
    left: '27%',
    start: 20,
    number: 20,
    unit: i18n.language === "ko" ? '' : '',
    order: 1,
    target: t('research_firms'),
  },
  {
    src: start_cp_image,
    top: '55%',
    left: '45%',
    start: 20,
    number: 20,
    unit: i18n.language === "ko" ? '' : '',
    order: 4,
    target: t('startup_clients'),
  },
  {
    src: consult_cp_image,
    top: '7%',
    left: '53%',
    start: 70,
    number: 70,
    unit: i18n.language === "ko" ? '': '',
    order: 0,
    target: t('consulting_firms'),
  },
  {
    src: invest_cp_image,
    top: '35%',
    left: '70%',
    start: 50,
    number: 50,
    unit: i18n.language === "ko" ? '' : '',
    order: 2,
    target: t('investment_firms')
  },
];

  return (
    <S.Title>
      <Container>
        <Inner>
          <S.TitleText>Our Clients</S.TitleText>
          <S.DescriptionBox>
            <S.Description>Get ahead with</S.Description>
          </S.DescriptionBox>
          <S.DescriptionBox>
            <S.Description>expert connections</S.Description>
          </S.DescriptionBox>
          <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
            {t('client_page_header1')}<br/>{t('client_page_header2')}
          </S.DescriptionContent>
          {isMobile && <MobileList items={mobileListItems} />}
        </Inner>
      </Container>
      {!isMobile && <ScrollingImages items={imagesData} requireAnimation={false} requireDescription={false}></ScrollingImages>}
    </S.Title>
  );
}
