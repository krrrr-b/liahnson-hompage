import { IconName } from 'assets/icons';
import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import MobileDropdown from 'components/base/Dropdown/MobileDropdown';
import Icon from 'components/base/Icon';
import ScrollingImages from 'components/base/ScrollingImages';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Main/MainExperts/styles';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import MobileCoverageGlobal from 'assets/images/global.png';
import MobileKorea from 'assets/images/korea.png';
import MobileIndustry from 'assets/images/experts_industry.png';
import MobileGlobalExperts from 'assets/images/industry_network.png';
import MobilePartners from 'assets/images/global_partners.png';
import MobileExperience from 'assets/images/average_experts.png';

export default function MainExperts(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [ ImgChange, setImgChange ] = useState(MobileCoverageGlobal);
  const goToExperts = () => {
    navigate('/experts');
  };

  const isKoKR = i18n.language === "ko";
  const advantages = [
    {
      content: t('A1'),
      icon: IconName.Reward,
    },
    {
      content: t('A2'),
      icon: IconName.Communication,
    },
    {
      content: t('A3'),
      icon: IconName.Decision,
    },
  ];
  
  const dropdownItems = [
    {
      score: isKoKR ? '150' : '150',
      label: isKoKR ? '전문가' : 'Expert',
      description:
      t('B1'),
    },
    {
      score: isKoKR ? '80' : '80',
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
      description:
      t('B4'),
    },
  ];
  
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
      isKoKR ? '연간 약 150만 이상의 전문가가 데이터베이스에 가입되고 있습니다.' : 'We currently have a database of 1.5 million experts, expanding every day',
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

  const mobileCoverage = [
    {
      score: isKoKR ? '80k+' : '80k+',
      label: isKoKR ? '글로벌 전문가 규모' : 'Overseas experts',
      img: isKoKR ? MobileCoverageGlobal : MobileCoverageGlobal,
      left: isKoKR ? '10px' : '10px',
      imgWidth: isKoKR ? '170%' : '170%',
      imgleft: isKoKR ? '33%' : '33%',
      imgTop: isKoKR ? '-100px' : '-100px',
    },
    {
      score: isKoKR ? '450k+': '450k+',
      label: isKoKR ? '한국 전문가 규모' : 'Experts in Korea',
      img: isKoKR ? MobileKorea : MobileKorea,
      left: isKoKR ? '55%' : '55%',
      imgWidth: isKoKR ? '159%' : '159%',
      imgleft: isKoKR ? '60%' : '60%',
      imgTop: isKoKR ? '-184px' : '-184px',
    },
    {
      score: isKoKR ? '60+' : '60+',
      label: isKoKR ? '전문가 산업 분야' : 'Industry coverage',
      img: isKoKR ? MobileIndustry : MobileIndustry,
      left: isKoKR ? '27%' : '27%',
      imgWidth: isKoKR ? '250%' : '250%',
      imgleft: isKoKR ? '-230%' : '-230%',
      imgTop: isKoKR ? '-185%' : '-185%',
    },
    {
      score: isKoKR ? '50+' : '50+',
      label: isKoKR ? '전문가 국가' : 'Cuntry coverage',
      img: isKoKR ? MobileGlobalExperts : MobileGlobalExperts,
      left: isKoKR ? '60%' : '60%',
      imgWidth: isKoKR ? '275%' : '275%',
      imgleft: isKoKR ? '60%' : '60%',
      imgTop: isKoKR ? '-110px' : '-110px',
    },
    {
      score: isKoKR ? '10+' : '10+',
      label: isKoKR ? '파트너쉽을 체결한 글로벌 파트너사' : 'Global partner companies with established partnerships',
      img: isKoKR ? MobilePartners : MobilePartners,
      imgWidth: isKoKR ? '100%' : '100%',
      left: isKoKR ? '15%' : '15%',
      imgleft: isKoKR ? '-74%' : '-74%',
      imgTop: isKoKR ? '-95px' : '-95px',
    },
    {
      score: isKoKR ? '8+' : '8+',
      label: isKoKR ? '평균 전문가 산업 경력' : 'Average experience of experts',
      img: isKoKR ? MobileExperience : MobileExperience,
      imgWidth: isKoKR ? '180%' : '180%',
      left: isKoKR ? '62%' : '62%',
      imgleft: isKoKR ? '33%' : '33%',
      imgTop: isKoKR ? '-100px' : '-100px',
    },
  ];

  const PcCoverage = [
    {
      score: isKoKR ? '80k' : '80k',
      label: isKoKR ? '글로벌 전문가 규모' : 'Overseas experts',
      img: isKoKR ? MobileCoverageGlobal : MobileCoverageGlobal,
    },
    {
      score: isKoKR ? '450k': '450k',
      label: isKoKR ? '한국 전문가 규모' : 'Experts in Korea',
      img: isKoKR ? MobileKorea : MobileKorea,
    },
    {
      score: isKoKR ? '60' : '60',
      label: isKoKR ? '전문가 산업 분야' : 'Industry coverage',
      img: isKoKR ? MobileIndustry : MobileIndustry,
    },
    {
      score: isKoKR ? '50' : '50',
      label: isKoKR ? '전문가 국가' : 'Cuntry coverage',
      img: isKoKR ? MobileGlobalExperts : MobileGlobalExperts,
    },
    {
      score: isKoKR ? '10' : '10',
      label: isKoKR ? '파트너쉽을 체결한 글로벌 파트너사' : 'Global partner companies with established partnerships',
      img: isKoKR ? MobilePartners : MobilePartners,
    },
    {
      score: isKoKR ? '8' : '8',
      label: isKoKR ? '평균 전문가 산업 경력' : 'Average experience of experts',
      img: isKoKR ? MobileExperience : MobileExperience,
    },
  ];
  

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.TitleWrapper>
            <S.Title>Our Experts</S.Title>
            <S.DescriptionWrapper>
              <S.Description style={{wordBreak: 'keep-all'}}>
              {t('main_page_our_experts_title')}
              </S.Description>
              <ArrowButton
                name='Discover more'
                color={BUTTON_COLORS.TRANSPARENT_BLACK}
                onClick={goToExperts}
              />
            </S.DescriptionWrapper>
          </S.TitleWrapper>

          <S.SubTitle style={{wordBreak: 'keep-all'}}>
            Advantages
            {isMobile && <S.MobileLine />}
          </S.SubTitle>
          <S.SubDescriptionList style={{wordBreak: 'keep-all'}}>
            {advantages.map(advantage => (
              <S.SubDescriptionItem key={advantage.content}>
                <S.SubDescriptionIconWrapper>
                  <Icon
                    name={isMobile ? advantage.icon : IconName.Plus}
                    size={isMobile ? '45' : '22'}
                    color={isMobile ? 'initial' : 'var(--color-red-500)'}
                  />
                </S.SubDescriptionIconWrapper>
                <S.SubDescription>{advantage.content}</S.SubDescription>
              </S.SubDescriptionItem>
            ))}
          </S.SubDescriptionList>
          <S.CoverageWrapper>
         {!isMobile && PcCoverage.map(item => (
          <S.Box key={item.label} onMouseOver={(e)=> setImgChange(item.img)} onMouseLeave={(e)=> setImgChange(MobileCoverageGlobal)}>
          <S.CoverageBox>
             <p style={{fontSize: '90px'}}>{item.score}<span>+</span></p>
             <p style={{fontSize: '25px', lineHeight: '40px', paddingBottom: '8rem'}}>{item.label}</p>
          </S.CoverageBox>
         </S.Box>
        ))}
        {!isMobile && 
        <S.ImageBox>
          <img src={ImgChange} alt="이미지" />
        </S.ImageBox> }
      </S.CoverageWrapper>

          {isMobile && mobileCoverage.map(item => 
          (<S.CoverageWrapper key={item.label}>
          <S.CoverageBox style={{ left: item.left}}>
          <p style={{ fontSize: '48px'}}>{item.score}</p>
          <p style={{ fontSize: '15px'}}>{item.label}</p>  
          <S.CoverageImage src={item.img} alt={item.label} style={{left: item.imgleft, width: item.imgWidth, top: item.imgTop }}></S.CoverageImage>
          </S.CoverageBox>
           </S.CoverageWrapper>))}
        
        </Inner>
      </Container>
    </S.Wrapper>
  );
}
