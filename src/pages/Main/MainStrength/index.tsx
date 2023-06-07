import Carousel from 'components/base/Carousel';
import { Container, Inner } from 'components/shared';
import S from 'pages/Main/MainStrength/styles';
import { useTranslation } from "react-i18next";

export default function MainStrength(): ReturnType<React.FunctionComponent> {
  const { t } = useTranslation()
  const CarouselItems = [
    {
      title: 'Quantity',
      content:
      t('strength_quantity'),
    },
    {
      title: 'Quality',
      content: t('strength_quality')
    },
    {
      title: 'Rapidity',
      content: t('strength_rapidity'),
    },
    {
      title: 'Flexibility',
      content: t('strength_flexibility'),
    },
    {
      title: 'Reliability',
      content:
      t('strength_reliability'),
    },
    {
      title: 'Capability',
      content:
      t('strength_capability'),
    },
  ];

  return (
    <S.Strength>
      <Container>
        <Inner>
          <S.Title style={{wordBreak: 'keep-all'}}>Our Strengths</S.Title>
        </Inner>
      </Container>
      <Carousel isHideIndicators>
        {CarouselItems.map(item => (
          <S.CarouselItem key={item.title}>
            <S.CarouselTitle style={{wordBreak: 'keep-all'}}>{item.title}</S.CarouselTitle>
            <S.CarouselDescription style={{wordBreak: 'keep-all'}}>{item.content}</S.CarouselDescription>
          </S.CarouselItem>
        ))}
      </Carousel>
    </S.Strength>
  );
}
