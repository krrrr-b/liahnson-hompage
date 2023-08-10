import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import S from 'components/domain/Footer/styles';
import Button from 'components/base/Button';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import MiniDropdown, {
  MiniDropdownItemType,
} from 'components/base/Dropdown/MiniDropdown';
import { IconName } from 'assets/icons';
import poweredLogo from 'assets/images/powered-logo.svg';
import { openMailClient } from 'utils/openEmail';
import ArrowButton from 'components/base/Button/ArrowButton';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";
import i18n from "languages/i18n";
import footerPageVideo1 from 'assets/images/footerPageVideo.mov';
import footerPageVideo2 from 'assets/images/footerPageVideo_2.mov';
import React, { useState } from 'react';
import { pageChange } from "utils/pageChange";

export default function Footer(): ReturnType<React.FunctionComponent> {
  const navigate = useNavigate();
  const { isMobile } = useContext(MediaQueryContext);
  const isMainPage = (location.pathname == '/') ? true : false;
  const { t } = useTranslation()

  const isKorean = i18n.language === "ko";
  const routeChange = (path: string) =>{
    navigate(path);
  }

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const onStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const dropDownItems: MiniDropdownItemType[] = [
    {
      label: 'Kor',
      onClick: () => {
        i18n.changeLanguage("ko");
        pageChange("ko");
        i18n.changeLanguage("ko");

        // window.location.reload();
      }, 
      selected: i18n.language === "ko"
    },
    {
      label: 'Eng',
      onClick: () => {
        i18n.changeLanguage("en");
        pageChange("en");
        i18n.changeLanguage("en");

        // window.location.reload();
      },
      selected: i18n.language === "en",
    },
  ];

  return (
    <S.Footer>
      <Container>
        <Inner>
          <S.Upper>
            <S.UpperLeft>
              <S.UpperDescription>
                {isMainPage ? 'Our people. Our foundation.' : 'Interested in'}
                <br />
                <S.StrongWord>{isMainPage ? 'Be a part of Us!' : 'working together?'}</S.StrongWord>
              </S.UpperDescription>
              <ArrowButton
                name={isMainPage ? 'Discover more' : 'Contact us'}
                color={BUTTON_COLORS.WHITE}
                onClick={() => {
                  isMainPage ? routeChange(LINKS.CAREERS.toString()) : openMailClient()
                }}
              />
            </S.UpperLeft>
            <S.UpperButtonBox>
              <Button
                width={isMobile ? '4.5rem' : '7rem'}
                height={isMobile ? '4.5rem' : '7rem'}
                color={BUTTON_COLORS.GREY}
                onClick={() => {
                  window.open('https://www.facebook.com/liahnson', "_blank", "noopener, noreferrer");
                }}>
                <Icon
                  name={IconName.FaceBook}
                  size={isMobile ? '2.6rem' : '4.1rem'}
                />
              </Button>
              <Button
                width={isMobile ? '4.5rem' : '7rem'}
                height={isMobile ? '4.5rem' : '7rem'}
                color={BUTTON_COLORS.GREY}
                onClick={() => {
                  window.open('https://www.linkedin.com/company/liahnson&company', "_blank", "noopener, noreferrer");
                }}>
                <Icon
                  name={IconName.LinkedIn}
                  size={isMobile ? '2.6rem' : '4.1rem'}
                />
              </Button>
            </S.UpperButtonBox>
          </S.Upper>
        </Inner>
      </Container>

      <S.ImageBox>
        <S.FooterVideo src={isMainPage ? footerPageVideo1 : footerPageVideo2} autoPlay={true} loop muted/>
      </S.ImageBox>

      <S.FooterBottomSection>
        <Container>
          <Inner>
            <S.GoToTopWrapperLarge onClick={goToTop}>
              <S.GoToTopTitleLarge>Up</S.GoToTopTitleLarge>
              <Icon
                name={IconName.ArrowTopLarge}
                color='var(--color-grey-000)'
                height='28.4rem'
              />
            </S.GoToTopWrapperLarge>
            <S.LowerTop>
              <Link to='/'>
                <img
                  src={poweredLogo}
                  alt='liahnson logo'
                  width={isMobile ? 210 : 399}
                />
              </Link>
              <S.LowerRight>
                {!isMobile && (
                  <S.FooterList>
                    <S.FooterItem>
                      <Link to='/services'>Services</Link>
                    </S.FooterItem>
                    <S.FooterItem>
                      <Link to='/clients' onClick={onStopPropagation}>
                        Clients
                      </Link>
                    </S.FooterItem>
                    <S.FooterItem>
                      <Link to='/experts'>Experts</Link>
                    </S.FooterItem>
                    <S.FooterItem>
                      <Link to='/careers'>Careers</Link>
                    </S.FooterItem>
                    <S.FooterItem>
                      <Link to='/about'>About</Link>
                    </S.FooterItem>
                    <S.FooterItem>
                      <S.ContactButton type='button' onClick={openMailClient}>
                        Contact Us
                      </S.ContactButton>
                    </S.FooterItem>
                  </S.FooterList>
                )}

                <S.Contacts>
                  <S.Address style={{wordBreak: 'keep-all'}}>
                    {t('company_address_1')}
                    <br/>
                    {t('company_address_2')}
                  </S.Address>
                  <S.Email>contact@liahnson.com</S.Email>
                </S.Contacts>
              </S.LowerRight>
            </S.LowerTop>
            <S.LowerBottom>
              <S.BottomFooterList>
                <S.GoToTopWrapper onClick={goToTop}>
                  <S.GoToTopTitle>Up</S.GoToTopTitle>
                  <Icon
                    name={IconName.ArrowTop}
                    color='var(--color-grey-000)'
                    height='7rem'
                    weight='0.01rem'
                  />
                </S.GoToTopWrapper>
                <MiniDropdown
                  color={BUTTON_COLORS.TRANSPARENT_WHITE}
                  width={isMobile ? '8.5rem' : '12.4rem'}
                  height={isMobile ? '4.6rem' : '7.1rem'}
                  dropDownItems={dropDownItems}
                  isMobile={isMobile}
                />
                <S.PolicyWrapper>
                  <S.FooterItem>
                    <Link to='/terms'>{isKorean ? "이용약관" : "Terms and conditions"}</Link>
                  </S.FooterItem>
                  <S.FooterItem>
                    <b><Link to='/privacy'>{isKorean ? "개인정보 처리방침" : "Privacy Policy"}</Link></b>
                  </S.FooterItem>
                  <S.FooterItem>
                    <Link to='/compliance'>{isKorean ? "컴플라이언스" : "Compliance"}</Link>
                  </S.FooterItem>
                  <S.FooterItem>
                    <Link to='/cookie'>{isKorean ? "쿠키 정책" : "Cookie Policy"}</Link>
                  </S.FooterItem>
                </S.PolicyWrapper>
              </S.BottomFooterList>
            </S.LowerBottom>
          </Inner>
        </Container>
      </S.FooterBottomSection>
    </S.Footer>
  );
}
