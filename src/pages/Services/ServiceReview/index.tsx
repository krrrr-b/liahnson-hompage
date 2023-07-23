import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Carousel from 'components/base/Carousel';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Services/ServiceReview/styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";

export default function ServiceReview(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const navigate = useNavigate();
  const { t } = useTranslation()

  const routeChange = (path: string) =>{ 
    navigate(path);
  }

  return (
    <S.Reviews>
      <Container>
        <Inner>
          <S.Title>Expert Highlights</S.Title>
        </Inner>
      </Container>

      <Carousel>
        {carouselItems.map(item => (
          <S.CarouselItem key={item.author}>
            <S.CarouselDescription>{item.content}</S.CarouselDescription>
            <div>
              <S.CarouselName>{item.author}</S.CarouselName>
              <S.CarouselReference>{item.reference}</S.CarouselReference>
            </div>
          </S.CarouselItem>
        ))}
      </Carousel>
      <Container>
        <Inner>
          <S.BottomWrapper>
            {!isMobile && <div></div>}

            <S.BottomDescriptionWrapper>
              <S.BottomDescription style={{wordBreak: 'keep-all'}}>
                {t('B5')} {t('B6')}
              </S.BottomDescription>
              <ArrowButton
                name='Become our Expert'
                color={BUTTON_COLORS.RED}
                onClick={() => {
                  if (isMobile) {
                    window.location.href = LINKS.TYPE_FORM_EXPERTS;
                  } else {
                    window.open(LINKS.TYPE_FORM_EXPERTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                  }
                }}
              />
            </S.BottomDescriptionWrapper>
          </S.BottomWrapper>
        </Inner>
      </Container>
    </S.Reviews>
  );
}

const carouselItems: { content: string; author: string; reference: string }[] =
  [
    {
      content:
        '“I worked with Liahnson on a strategy consulting project. I appreciated a lot the collaboration with Liahnson as they work very professionally and the entire execution of the project went very well.”',
      author: 'Thomas Mittendrein',
      reference:
        'Strategic Marketing Leader, Performance Lubricants, Global Petrochemicals Company',
    },
    {
      content:
        '“I truly enjoy working on projects with Liahnson. They are a very professional group and do a terrific job in defining the scope and expectations of a project to assure a proper fit. Their preparation process is also one of the best in the industry, as are their completion and payment processes.”',
      author: 'Michael Accavitti',
      reference: 'Senior Vice President Global Automotive Company',
    },
    {
      content:
        '“Sincere! High efforts! This is my deepest feelings since my cooperation with Liahnson.”',
      author: 'Liu Bo',
      reference:
        'Vice President Sales & Marketing Department, Global Automotive Company',
    },
  ];
