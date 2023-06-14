import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'components/base/Button';
import S from 'components/domain/Header/styles';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import MiniDropDown, {
  MiniDropdownItemType,
} from 'components/base/Dropdown/MiniDropdown';
import { Container, Inner } from 'components/shared';
import { openMailClient } from 'utils/openEmail';
import lightLogo from 'assets/images/logo.svg';
import darkLogo from 'assets/images/logo-dark.svg';
import mobileLightLogo from 'assets/images/logo-mobile.svg';
import mobileDarkLogo from 'assets/images/logo-mobile-dark.svg';
import Icon from 'components/base/Icon';
import useDropdown from 'hooks/useDropdown';
import { IconName } from 'assets/icons';
import MediaQueryContext from 'contexts/MediaQueryContext';
import i18n from "languages/i18n";
import { initializeScreen } from "utils/initializeScreen";
import { pageChange } from "utils/pageChange";

export default function Header(): ReturnType<React.FunctionComponent> {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const [widths, setWidths] = useState<Array<string>>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const location = useLocation();
  const { isTablet } = useContext(MediaQueryContext);
  const { dropdownRef, isOpen, toggleDropdown, setIsOpen } = useDropdown(
    false,
    false,
  );

  initializeScreen();

  useEffect(() => {
    const newWidths = tabRefs.current.map(tabRef => {
      if (tabRef) {
        const computedStyle = getComputedStyle(tabRef, '::before');
        return computedStyle.width;
      }
      return '';
    });
    setWidths(newWidths);
  }, []);

  useEffect(() => {
    let page = location.search
    .replace('page=', '/')
    .replace('?', '');

    if ((page != undefined && page.trim() != "") && location.pathname != page && page != '/') {
      let pathList = new Array(
        '/services',
        '/clients',
        '/experts',
        '/careers',
        '/about',
        '/compliance',
        '/compliance-additional',
        '/cookie',
        '/terms',
        '/privacy'
      );

      if (pathList.includes(page)) {
        navigate(page);
      }
    }
  }, []);

  const createRef = (el: HTMLButtonElement | null) => {
    if (el && !tabRefs.current.includes(el)) {
      tabRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (location.pathname === '/services' || location.pathname === '/clients') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [location.pathname]);

  const onClick = (e: React.MouseEvent, label: string = "") => {
    e.stopPropagation();
    setIsOpen(false);
    pageChange(i18n.language, label);
  };

  return (
    <S.Header isOpen={isOpen}>
      <Container>
        <Inner>
          <S.Wrapper>
            <S.Left ref={dropdownRef}>
              <S.LogoLink to='/'  onClick={(e) => onClick(e, "main")}>
                {isTablet ? (
                  isOpen ? (
                    <img src={mobileLightLogo} alt='liahnson logo' />
                  ) : theme === 'light' ? (
                    <img src={mobileLightLogo} alt='liahnson logo' />
                  ) : (
                    <img src={mobileDarkLogo} alt='liahnson logo' />
                  )
                ) : theme === 'light' ? (
                  <img src={lightLogo} alt='liahnson logo' />
                ) : (
                  <img src={darkLogo} alt='liahnson logo' />
                )}
              </S.LogoLink>
              <S.DropdownButton>
                <Button
                  onClick={toggleDropdown()}
                  color={
                    isOpen
                      ? BUTTON_COLORS.RED
                      : theme === 'light'
                      ? BUTTON_COLORS.BLACK
                      : BUTTON_COLORS.WHITE
                  }
                  width='5.2rem'
                  height='5.2rem'>
                  <Icon
                    name={isOpen ? IconName.Cross : IconName.Equal}
                    size='28'
                    color={
                      isOpen
                        ? BUTTON_COLORS.RED
                        : theme === 'light'
                        ? BUTTON_COLORS.BLACK
                        : BUTTON_COLORS.WHITE
                    }
                  />
                </Button>
              </S.DropdownButton>
            </S.Left>
            <S.Right isOpen={isOpen}>
              {navItems.map((item, index) => (
                <S.NavListItem key={item.value}>
                  <S.LinkItem
                    ref={createRef as any}
                    style={{ width: widths[index] }}
                    to={item.value}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    theme={theme}
                    aria-label={item.label}
                    onClick={(e) => onClick(e, item.label)}>
                    {item.label}
                  </S.LinkItem>
                </S.NavListItem>
              ))}
              {isTablet ? (
                <S.MobileOnly>
                  <S.NavListItem>
                    <S.LinkItemDiv
                      theme={theme}
                      onClick={e => {
                        openMailClient();
                        onClick(e);
                      }}>
                      Contact Us
                    </S.LinkItemDiv>
                  </S.NavListItem>
                </S.MobileOnly>
              ) : (
                <S.NotInMobile>
                  <Button
                    color={
                      theme === 'dark'
                        ? BUTTON_COLORS.WHITE
                        : BUTTON_COLORS.BLACK
                    }
                    width='16.2rem'
                    height='6.3rem'
                    onClick={openMailClient}>
                    Contact Us
                  </Button>
                </S.NotInMobile>
              )}
              <S.MobileLeft>
                <MiniDropDown
                  color={
                    isOpen
                      ? BUTTON_COLORS.TRANSPARENT_BLACK
                      : theme === 'light'
                      ? BUTTON_COLORS.TRANSPARENT_BLACK
                      : BUTTON_COLORS.TRANSPARENT_WHITE
                  }
                  width={isTablet ? '8.5rem' : '12.4rem'}
                  height={isTablet ? '4.6rem' : '7.1rem'}
                  dropDownItems={dropDownItems}
                  isMobile={isTablet}
                />
              </S.MobileLeft>
            </S.Right>
          </S.Wrapper>
        </Inner>
      </Container>
    </S.Header>
  );
}

const dropDownItems: MiniDropdownItemType[] = [
  {
    label: 'Kor',
    onClick: () => {
      i18n.changeLanguage("ko");
      pageChange("ko");
      // window.location.reload();
    },
    selected: i18n.language === "ko"
  },
  {
    label: 'Eng',
    onClick: () => {
      i18n.changeLanguage("en");
      pageChange("en");
      // window.location.reload();
    },
    selected: i18n.language === "en"
  },
];

const navItems = [
  {
    label: 'Services',
    value: '/services',
  },
  {
    label: 'Clients',
    value: '/clients',
  },
  {
    label: 'Experts',
    value: '/experts',
  },
  {
    label: 'Careers',
    value: '/careers',
  },
  {
    label: 'About',
    value: '/about',
  },
];
