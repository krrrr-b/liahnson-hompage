import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Clients/ClientReviews/styles';
import { useContext } from 'react';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";
import client_review from 'assets/images/client_review.jpg';

export default function ClientReviews(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()

  return (
    <S.Review>
      <Container>
        <Inner>
          <S.Title>Client Reviews</S.Title>
        </Inner>
      </Container>
      <S.Container>
        <S.ImageContainer>
          <img src={client_review} />
        </S.ImageContainer>
        <S.TextContainer>
          <S.TextContainerTitle>
            <S.TextContainerTitleText style={{wordBreak: 'keep-all'}}>
              {t('client_reviews')}
            </S.TextContainerTitleText>
            <S.TextContainerAuthor>
              - A consulting firm director
            </S.TextContainerAuthor>
          </S.TextContainerTitle>
        </S.TextContainer>
      </S.Container>
      <Container>
        <Inner>
          <S.DescriptionWrapper>
            {!isMobile && <div></div>}
            <div>
              <S.Description style={{wordBreak: 'keep-all'}}>
              {t('service_dozen_of_consultations_1')} {t('service_dozen_of_consultations_2')}
              </S.Description>
              <ArrowButton
                name='Become our Client'
                color={BUTTON_COLORS.RED}
                width={isMobile ? '19rem' : ''}
                onClick={() => {
                  if (isMobile) {
                    window.open(LINKS.TYPE_FORM_CLIENTS, "_blank");
                    // window.location.href = LINKS.TYPE_FORM_CLIENTS;
                  } else {
                    window.open(LINKS.TYPE_FORM_CLIENTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                  }
                }}
              />
            </div>
          </S.DescriptionWrapper>
        </Inner>
      </Container>
    </S.Review>
  );
}
