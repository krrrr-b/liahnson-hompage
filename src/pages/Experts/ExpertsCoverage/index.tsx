import MobileDropdown from 'components/base/Dropdown/MobileDropdown';
import ScrollingImages from 'components/base/ScrollingImages';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Experts/ExpertsCoverage/styles';
import MobileCoverageGlobal from 'assets/images/global.png';
import MobileKorea from 'assets/images/korea.png';
import MobileIndustry from 'assets/images/experts_industry.png';
import MobileGlobalExperts from 'assets/images/industry_network.png';
import MobilePartners from 'assets/images/global_partners.png';
import MobileExperience from 'assets/images/average_experts.png';
import { useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function ExpertsCoverage(): ReturnType<React.FunctionComponent> {
  const [ ImgChange, setImgChange ] = useState(MobileCoverageGlobal);
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()
  const isKoKR = i18n.language === "ko";
  const mobileCoverage = [
    {
      score: isKoKR ? '300k+' : '300k+',
      label: isKoKR ? '글로벌 전문가 규모' : 'Global Experts',
      img: isKoKR ? MobileCoverageGlobal : MobileCoverageGlobal,
      left: isKoKR ? '10px' : '10px',
      imgWidth: isKoKR ? '170%' : '170%',
      imgleft: isKoKR ? '40%' : '40%',
      imgTop: isKoKR ? '-100px' : '-100px',
    },
    {
      score: isKoKR ? '4.5m+': '4.5m+',
      label: isKoKR ? '한국 전문가 규모' : 'Korean Experts',
      img: isKoKR ? MobileKorea : MobileKorea,
      left: isKoKR ? '53%' : '53%',
      imgWidth: isKoKR ? '140%' : '140%',
      imgleft: isKoKR ? '70%' : '70%',
      imgTop: isKoKR ? '-184px' : '-184px',
    },
    {
      score: isKoKR ? '60+' : '60+',
      label: isKoKR ? '전문가 산업 분야' : 'Industries Covered',
      img: isKoKR ? MobileIndustry : MobileIndustry,
      left: isKoKR ? '22%' : '22%',
      imgWidth: isKoKR ? '205%' : '205%',
      imgleft: isKoKR ? '-160%' : '-160%',
      imgTop: isKoKR ? '-146%' : '-146%',
    },
    {
      score: isKoKR ? '50+' : '50+',
      label: isKoKR ? '전문가 국가' : 'Countries Covered',
      img: isKoKR ? MobileGlobalExperts : MobileGlobalExperts,
      left: isKoKR ? '40%' : '40%',
      imgWidth: isKoKR ? '220%' : '220%',
      imgleft: isKoKR ? '59%' : '59%',
      imgTop: isKoKR ? '-92px' : '-92px',
    },
    {
      score: isKoKR ? '10+' : '10+',
      label: isKoKR ? '파트너쉽을 체결한 글로벌 파트너사' : 'Global Partners',
      img: isKoKR ? MobilePartners : MobilePartners,
      imgWidth: isKoKR ? '105%' : '105%',
      left: isKoKR ? '19%' : '19%',
      imgleft: isKoKR ? '-74%' : '-74%',
      imgTop: isKoKR ? '-95px' : '-95px',
    },
    {
      score: isKoKR ? '8+' : '8+',
      label: isKoKR ? '평균 전문가 산업 경력' : 'Expert Average Experience in Years',
      img: isKoKR ? MobileExperience : MobileExperience,
      imgWidth: isKoKR ? '180%' : '180%',
      left: isKoKR ? '62%' : '62%',
      imgleft: isKoKR ? '33%' : '33%',
      imgTop: isKoKR ? '-100px' : '-100px',
    },
  ];


  const PcCoverage = [
    {
      score: isKoKR ? '300k' : '300k',
      label: isKoKR ? '글로벌 전문가 규모' : 'Global Experts',
      img: isKoKR ? MobileCoverageGlobal : MobileCoverageGlobal,
    },
    {
      score: isKoKR ? '4.5m': '4.5m',
      label: isKoKR ? '한국 전문가 규모' : 'Korean Experts',
      img: isKoKR ? MobileKorea : MobileKorea,
    },
    {
      score: isKoKR ? '60' : '60',
      label: isKoKR ? '전문가 산업 분야' : 'Industries Covered',
      img: isKoKR ? MobileIndustry : MobileIndustry,
    },
    {
      score: isKoKR ? '100' : '100',
      label: isKoKR ? '전문가 국가' : 'Countries Covered',
      img: isKoKR ? MobileGlobalExperts : MobileGlobalExperts,
    },
    {
      score: isKoKR ? '10' : '10',
      label: isKoKR ? '파트너쉽을 체결한 글로벌 파트너사' : 'Global Partners',
      img: isKoKR ? MobilePartners : MobilePartners,
    },
    {
      score: isKoKR ? '15' : '15',
      label: isKoKR ? '평균 전문가 산업 경력' : 'Expert Average Experience in Years',
      img: isKoKR ? MobileExperience : MobileExperience,
    },
  ];
  
  // 배열의 순서는 left 순서대로 넣어주어야 정상적으로 동작합니다.
// order는 위에서부터의 순서입니다.
  // const imagesData = [
  //   {
  //     src: '',
  //     top: '24%',
  //     left: '10%',
  //     number: 80,
  //     unit: isKoKR ? '개국' : '',
  //     order: 1,
  //     target: 'Coverage',
  //     description: isKoKR ? `매년 80개 이상 국가의 전문가가 자문을 참여하고 있습니다.` : 'We have experts from more than 80 countries, covering all markets',
  //     background: 'var(--color-grey-800)',
  //     width: '46.9rem',
  //     height: '23.1rem',
  //     titleSize: '7rem',
  //   },
  //   {
  //     src: '',
  //     top: '55%',
  //     left: '25%',
  //     number: 30,
  //     unit: isKoKR ? '개' : '',
  //     order: 3,
  //     target: 'Language',
  //     description: isKoKR ? `매년 30개 이상의 언어로 자문이 이루어지고 있습니다.` : 'We provide consultations in more than 30 languages, with interpretation services available for all of them',
  //     background: 'var(--color-red-500)',
  //     width: '56.3rem',
  //     height: '30.4rem',
  //     titleSize: '9rem',
  //   },
  //   {
  //     src: '',
  //     top: '7%',
  //     left: '43%',
  //     number: 150,
  //     unit: isKoKR ? '만' : '',
  //     order: 2,
  //     target: 'Scale',
  //     description:
  //     isKoKR ? '연간 약 150만 이상의 전문가가 데이터베이스에 가입되고 있습니다.' : 'We currently have a database of 1.5 million experts, expanding every day',
  //     background: 'var(--color-red-500)',
  //     width: '48.6rem',
  //     height: '42.3rem',
  //     titleSize: '11rem',
  //   },
  //   {
  //     src: '',
  //     top: '38%',
  //     left: '75%',
  //     number: 6,
  //     unit: isKoKR ? '년' : '',
  //     order: 0,
  //     target: 'Experiences',
  //     description: isKoKR ? `전문가의 평균 경력은 6년 이상입니다.` : 'Most of our experts have at least 10 years of experience in their industry',
  //     background: 'var(--color-grey-800)',
  //     width: '40rem',
  //     height: '36.2rem',
  //     titleSize: '8rem',
  //   },
  // ];

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.Title>Expert Coverage</S.Title>
          <S.Description style={{wordBreak: 'keep-all'}}>
            {t('expert_page_coverage')} 
          </S.Description>
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
          <p style={{ fontSize: '48px', wordBreak: 'keep-all'}} >{item.score}</p>
          <p style={{ fontSize: '15px', wordBreak: 'keep-all'}}>{item.label}</p>  
          <S.CoverageImage src={item.img} alt={item.label} style={{left: item.imgleft, width: item.imgWidth, top: item.imgTop }}></S.CoverageImage>
          </S.CoverageBox>
           </S.CoverageWrapper>))}
        </Inner>
      </Container>
    </S.Wrapper>
  );
}
