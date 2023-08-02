import { IconName } from 'assets/icons';
import BackgroundText from 'components/base/BackgroundText';
import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/About/AboutVision/styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";

function pad(number: number): string {
  return '0' + number + '.';
}

export default function AboutVision(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeChange = (path: string) =>{ 
    navigate(path);
  }

  const triad = [
    {
      title: 'Vision',
      icon: IconName.Vision,
      description: t('about_vision'),
      iconTopPadding: '0',
    },
    {
      title: 'Mission',
      icon: IconName.Target,
      description: t('about_mission'),
      iconTopPadding: '1.4rem',
    },
    {
      title: 'Value',
      icon: IconName.Light,
      description: t('about_value'),
      iconTopPadding: '2.4rem',
    },
  ];
  
  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.TriadWrapper>
            {triad.map((item, index) => (
              <S.TriadItem key={item.title}>
                {!isMobile && <S.TriadTitle>{item.title}</S.TriadTitle>}
                <S.TriadIconWrapper paddingTop={item.iconTopPadding} style={{wordBreak: 'keep-all'}}>
                  <Icon
                    name={item.icon}
                    size='15.3rem'
                    color={BUTTON_COLORS.BLACK}
                  />
                </S.TriadIconWrapper>
                <S.TriadDescription style={{wordBreak: 'keep-all'}}>
                  {isMobile && (
                    <S.TriadTitle>
                      <S.Numbering>{pad(index + 1) + ' '}</S.Numbering>
                      {item.title}
                    </S.TriadTitle>
                  )}
                  {item.description}
                </S.TriadDescription>
              </S.TriadItem>
            ))}
          </S.TriadWrapper>

          <S.ButtonWrapper>
            <ArrowButton
              name='Become our Client'
              color={BUTTON_COLORS.WHITE}
              width={isMobile ? '19rem' : ''}
              onClick={() => {
                if (isMobile) {
                  window.location.href = LINKS.TYPE_FORM_CLIENTS;
                } else {
                  window.open(LINKS.TYPE_FORM_CLIENTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                }
              }}
            />
            <ArrowButton
              name='Become our Expert'
              color={BUTTON_COLORS.WHITE}
              width={isMobile ? '19rem' : ''}
              onClick={() => {
                if (isMobile) {
                  window.location.href = LINKS.TYPE_FORM_EXPERTS;
                } else {
                  window.open(LINKS.TYPE_FORM_EXPERTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                }
              }}
            />
          </S.ButtonWrapper>
        </Inner>
      </Container>
      <S.BackgroundWrapper>
        <BackgroundText
          upper='we bring value'
          lower='through expertise'
          lowerMobilePosition='2rem'
          color='var(--color-black-040)'
        />
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
}

