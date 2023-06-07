import Flip from 'components/base/Flip';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Careers/CareerImages/styles';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import who_you_are from 'assets/images/who_you_are.jpg';
import what_will_you_learn from 'assets/images/what_will_you_learn.jpg';
import how_you_will_grow from 'assets/images/how_you_will_grow.jpg';
import i18n from "languages/i18n";

export default function CareerImages(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation();
  const isKorean = i18n.language === "ko";

  return (
    <Container>
      <Inner>
        <S.GridContainer style={{wordBreak: 'keep-all'}}>
          <S.Image1>
            <Flip
              width={isMobile ? '33rem' : '63rem'}
              height={isMobile ? '43.3rem' : '75.6rem'}
              imageURL={who_you_are}
              title='Who you are'
              content={[t('careers_desciption_1')]}
            />
          </S.Image1>
          <S.Image2>
            <Flip
              width={isMobile ? '33rem' : '63rem'}
              height={isMobile ? '70.3rem' : '77.6rem'}
              imageURL={what_will_you_learn}
              title='What will you learn'
              content={[t('careers_desciption_2'), t('careers_desciption_2_1')]}
            />
          </S.Image2>
          <S.Image3>
            <Flip
              isVertical={!isMobile}
              isReactive={true}
              width={isMobile ? '33rem' : '130rem'}
              height={isMobile ? isKorean ? '95rem' : '139rem' : '105rem'}
              imageURL={how_you_will_grow}
              title='How you will grow'
              content={[t('careers_desciption_3'), t('careers_desciption_3_0'), t('careers_desciption_3_1'), t('careers_desciption_3_2'), t('careers_desciption_3_3')]}
            />
          </S.Image3>
        </S.GridContainer>
      </Inner>
    </Container>
  );
}
