import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import useDropdown from 'hooks/useDropdown';
import S from 'pages/Main/MainService/styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function MainService(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()
  const navigate = useNavigate();

  const serviceList = [
    {
      title: 'Consultation',
      content:
        t('consultations_title'),
    },
    {
      title: 'Project',
      content:
      t('projects_title'),
    },
    {
      title: 'Survey',
      content: t('surveys_title'),
    },
    {
      title: 'Enhancement',
      content:
      t('enhancements_title'),
    },
  ];

  const dropdowns = Array.from({ length: serviceList.length }, () =>
    useDropdown(false),
  );

  const goToService = () => {
    navigate('/services');
  };

  return (
    <S.Service>
      <Container>
        <Inner>
          <S.DescriptionBox>
            <S.DescriptionTitle>Our Services</S.DescriptionTitle>
            <S.DescriptionContentWrapper>
              <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
                {t('main_page_service_1')}
                <br/>
                {t('main_page_service_1_1_1')}&nbsp;
                {t('main_page_service_1_1_2')}&nbsp;
                <br/><br/>
                {t('main_page_service_2_1')}&nbsp;
                {t('main_page_service_2_2')}&nbsp;
                {t('main_page_service_2_3')}
              </S.DescriptionContent>
              {!isMobile && (
                <ArrowButton
                  color={BUTTON_COLORS.TRANSPARENT_BLACK}
                  name='Discover More'
                  onClick={goToService}
                />
              )}
            </S.DescriptionContentWrapper>
          </S.DescriptionBox>
        </Inner>
      </Container>
      <S.ServiceList>
        {serviceList.map((service, index) => (
          <S.ServiceItem
            key={service.title}
            ref={dropdowns[index].dropdownRef}
            onClick={dropdowns[index].toggleDropdown()}>
            <S.ServiceItemTitle>{service.title}</S.ServiceItemTitle>
            <S.ServiceItemDescription isOpen={dropdowns[index].isOpen} style={{wordBreak: 'keep-all'}}>
              {service.content}
            </S.ServiceItemDescription>
          </S.ServiceItem>
        ))}
      </S.ServiceList>
      {isMobile && (
        <Container>
          <Inner>
            <ArrowButton
              color={BUTTON_COLORS.TRANSPARENT_BLACK}
              name='Discover More'
              onClick={goToService}
            />
          </Inner>
        </Container>
      )}
    </S.Service>
  );
}
