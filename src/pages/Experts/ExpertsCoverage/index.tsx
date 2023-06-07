import MobileDropdown from 'components/base/Dropdown/MobileDropdown';
import ScrollingImages from 'components/base/ScrollingImages';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Experts/ExpertsCoverage/styles';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function ExpertsCoverage(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()

  const isKoKR = i18n.language === "ko";
  const dropdownItems = [
    {
      score: isKoKR ? '150' : '150',
      label: isKoKR ? '전문가' : 'Expert',
      description: t('B1'),
    },
    {
      score: isKoKR ? '80': '80',
      label: isKoKR ? '국가' : 'Country',
      description: t('B2'),
    },
    {
      score: isKoKR ? '30' : '30',
      label: isKoKR ? '언어' : 'Language',
      description: t('B3'),
    },
    {
      score: isKoKR ? '6' : '6',
      label: isKoKR ? '평균 경력' : 'Average Career',
      description: t('B4'),
    },
  ];
  
  // 배열의 순서는 left 순서대로 넣어주어야 정상적으로 동작합니다.
// order는 위에서부터의 순서입니다.
  const imagesData = [
    {
      src: '',
      top: '24%',
      left: '10%',
      number: 80,
      unit: isKoKR ? '개국' : '',
      order: 1,
      target: 'Coverage',
      description: isKoKR ? `매년 80개 이상 국가의 전문가가 자문을 참여하고 있습니다.` : 'We have experts from more than 80 countries, covering all markets',
      background: 'var(--color-grey-800)',
      width: '46.9rem',
      height: '23.1rem',
      titleSize: '7rem',
    },
    {
      src: '',
      top: '55%',
      left: '25%',
      number: 30,
      unit: isKoKR ? '개' : '',
      order: 3,
      target: 'Language',
      description: isKoKR ? `매년 30개 이상의 언어로 자문이 이루어지고 있습니다.` : 'We provide consultations in more than 30 languages, with interpretation services available for all of them',
      background: 'var(--color-red-500)',
      width: '56.3rem',
      height: '30.4rem',
      titleSize: '9rem',
    },
    {
      src: '',
      top: '7%',
      left: '43%',
      number: 150,
      unit: isKoKR ? '만' : '',
      order: 2,
      target: 'Scale',
      description:
      isKoKR ? '연간 약 150만 이상의 전문가가 데이터베이스에 가입되고 있습니다.' : 'We currently have a database of 500,000 experts, expanding every day',
      background: 'var(--color-red-500)',
      width: '48.6rem',
      height: '42.3rem',
      titleSize: '11rem',
    },
    {
      src: '',
      top: '38%',
      left: '75%',
      number: 6,
      unit: isKoKR ? '년' : '',
      order: 0,
      target: 'Experiences',
      description: isKoKR ? `전문가의 평균 경력은 6년 이상입니다.` : 'Most of our experts have at least 10 years of experience in their industry',
      background: 'var(--color-grey-800)',
      width: '40rem',
      height: '36.2rem',
      titleSize: '8rem',
    },
  ];

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.Title>Experts Coverage</S.Title>
          <S.Description style={{wordBreak: 'keep-all'}}>
            {t('expert_page_coverage')}
          </S.Description>
          {isMobile && <MobileDropdown dropdownItems={dropdownItems} />}
        </Inner>
      </Container>
      {!isMobile && <ScrollingImages items={imagesData} requireAnimation={false} requireDescription={false}></ScrollingImages>}
    </S.Wrapper>
  );
}
