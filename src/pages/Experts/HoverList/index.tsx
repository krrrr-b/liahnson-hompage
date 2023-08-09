import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import useDropdown from 'hooks/useDropdown';
import S from 'pages/Experts/HoverList/styles';
import { useContext } from 'react';
import i18n from "i18next";
import expert from 'assets/images/expert.jpeg';

export default function HoverList(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);

  const hoverListUpper = [
    {
      title: i18n.language === "ko" ? '하이테크' : 'High Tech',
      content: [
        'Semiconductor',
        'Security (Physical, IT)',
        'Connected Car / ADAS',
        'VR / AR Technology',
        'Artificial Intelligence / Robotics',
        'Mobile / Consumer Electronics',
        'Smart Factory / Industrial 4.0',
        'Cloud / Big Data',
      ],
      score: '31%',
      color: '#292929',
    },
    {
      title: i18n.language === "ko"  ? '금융' : 'Financial',
      content: [
        'Insurance',
        'Captive Auto Lease',
        'Real Estate Investment',
        'Startup Accelerator',
        'Pension',
      ],
      score: '25%',
      color: '#484848',
    },
    {
      title: i18n.language === "ko"  ? '중공업/산업재' : 'Industrial',
      content: [
        'Oil & Gas',
        'Petrochemical',
        'Shipyard',
        'Passenger Vehicle / Commercial Vehicle',
        'Auto Parts',
        'New Energy / Waste Management',
        'Lithium-ion Battery',
      ],
      score: '12%',
      color: '#676767',
    },
  ];
  
  const hoverListLower = [
    {
      title: i18n.language === "ko" ? '헬스케어' : 'Healthcare',
      content: [
        'Contract Manufacturing Organization',
        'Biosimilar',
        'Medical Equipment',
        'Home Healthcare Services',
        'Hospital Operation',
      ],
      score: '10%',
      color: '#969696',
    },
    {
      title: i18n.language === "ko" ? '소비재' : 'Consumer Goods & Services',
      content: [
        'Food & Beverage',
        'Homeware / Interior / Furniture',
        'O2O Service (Food Delivery, Car Sharing, Tourism etc)',
        'Cosmetics',
        'Fashion / Luxury Items',
        'Retail Strategy (Store Management / Online Mall)',
      ],
      score: '8%',
      color: '#a9a9a9',
    },
    {
      title: i18n.language === "ko" ? '통신' : 'Telecommunications',
      content: [
        'IoT',
        'Satellite TV / OTT',
        'Set-Top-Box',
        'MVNO',
        'Network Equipment / Cable',
        'Software (Enterprise Social Network)',
      ],
      score: '6%',
      color: '#bebebe',
    },
  ];

  const hoverList = [...hoverListUpper, ...hoverListLower];

  const dropdowns = Array.from({ length: hoverList.length }, (_, index) =>
    useDropdown(false),
  );

  const handleToggleDropdown = (index: number) => {
    dropdowns[index].toggleDropdown()();
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Inner>
          {isMobile ? (
            <>
              <S.Title>{i18n.language === "ko" ? '전문가' : 'Distribution of experts' }</S.Title>
              <S.Title>{i18n.language === "ko" ? '산업 분류' : 'by industry' }</S.Title>
              <S.Title>{i18n.language === "ko" ? '및 분포' : 'in our network' }</S.Title>
            </>
          ) : (
            <S.Title>{i18n.language === "ko" ? '전문가 산업 분류 및 분포' : 'Experts by Industry in Our Network' }</S.Title>
          )}
        </S.Inner>
      </S.Container>

      <S.GridContainer>
        {hoverListUpper.map(item => (
          <S.GridItem key={item.title}>
            <S.GridInner>
              <S.GridInnerTitle>
                {item.title}

                <S.GridInnerContent>
                  {item.content.map(item => (
                    <S.GridInnerItem key={item}>{item}</S.GridInnerItem>
                  ))}
                </S.GridInnerContent>
              </S.GridInnerTitle>
              <S.GridScore>{item.score}</S.GridScore>
            </S.GridInner>
          </S.GridItem>
        ))}
        {hoverListLower.map(item => (
          <S.GridItem key={item.title}>
            <S.GridInner>
              <S.GridScore>{item.score}</S.GridScore>
              <S.GridInnerTitle>{item.title}</S.GridInnerTitle>
              <S.GridInnerContent>
                {item.content.map(item => (
                  <S.GridInnerItem key={item}>{item}</S.GridInnerItem>
                ))}
              </S.GridInnerContent>
            </S.GridInner>
          </S.GridItem>
        ))}
      </S.GridContainer>

      {/* 모바일 드롭다운 */}
      <S.DropdownContainer>
        {hoverList.map((item, index) => (
          <S.Dropdown
            key={item.title + index}
            ref={dropdowns[index].dropdownRef}
            backgroundColor={item.color}
            onClick={() => handleToggleDropdown(index)}>
            <Container>
              <Inner>
                <S.DropdownTitleWrapper isOpen={dropdowns[index].isOpen}>
                  <S.DropdownTitle>{item.title}</S.DropdownTitle>
                  <S.DropdownScore isOpen={dropdowns[index].isOpen}>
                    {item.score}
                  </S.DropdownScore>
                </S.DropdownTitleWrapper>
              </Inner>
            </Container>

            <S.DropdownContent isOpen={dropdowns[index]?.isOpen}>
              <Container>
                <Inner>
                  <S.ItemWrapper>
                    {item.content.map(item => (
                      <S.Item key={item}>{item}</S.Item>
                    ))}
                  </S.ItemWrapper>
                </Inner>
              </Container>
            </S.DropdownContent>
          </S.Dropdown>
        ))}
      </S.DropdownContainer>
    </S.Wrapper>
  );
}
