import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import { useContext } from 'react';
import S from 'pages/Experts/ExpertsCompliances/styles';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";

export default function ExpertsCompliances(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()

  return (
    <Container>
      <Inner>
        <S.Wrapper>
          <S.Title>Experts Compliances</S.Title>
          <div>
            <S.Description style={{wordBreak: 'keep-all'}}>
              {t('experts_compliances')}
            </S.Description>
            <div>
              <S.ExpertsContent style={{wordBreak: 'keep-all'}}>
                {t('B5')} {t('B6')}
              </S.ExpertsContent>
              <ArrowButton
                color={BUTTON_COLORS.RED}
                onClick={() => {
                  if (isMobile) {
                    window.location.href = LINKS.TYPE_FORM_EXPERTS;
                  } else {
                    window.open(LINKS.TYPE_FORM_EXPERTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                  }
                }}
                name='Become our Expert'
              />
            </div>
          </div>
        </S.Wrapper>
      </Inner>
    </Container>
  );
}
