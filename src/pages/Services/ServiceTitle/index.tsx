import { IconName, IconNameType } from 'assets/icons';
import SimpleDropdownList, {
  SimpleDropdownListItemType,
} from 'components/base/Dropdown/SimpleDropdownList';
import HoverIcon from 'components/base/HoverIcon';
import Icon from 'components/base/Icon';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Services/ServiceTitle/styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

export default function ServiceTitle(): ReturnType<React.FunctionComponent> {
  const [selected, setSelected] = useState<HoverItemTitle | null>('Consultation');
  const [isServiceTitleVisible, setIsServiceTitleVisible] = useState(true);
  const serviceTitleRef = useRef(null);
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()

  const onClick = (title: HoverItemTitle) => {
    if (title === selected && isMobile) {
      setSelected(null);
    } else {
      setSelected(title);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsServiceTitleVisible(
            entry.isIntersecting && entry.boundingClientRect.y > -1000,
          );
        });
      },
      { rootMargin: '-300px 0px 0px 0px', threshold: 0 },
    );

    if (serviceTitleRef.current) {
      observer.observe(serviceTitleRef.current);
    }

    return () => {
      if (serviceTitleRef.current) {
        observer.unobserve(serviceTitleRef.current);
      }
    };
  }, []);

  const hoverItem: HoverItem[] = [
    {
      title: 'Consultation',
      icon: IconName.Chat,
      contents:
      t('consultations_title'),
    },
    {
      title: 'Project',
      icon: IconName.Document,
      contents:
      t('projects_title'),
    },
  
    {
      title: 'Survey',
      icon: IconName.Check,
      contents:
      t('surveys_title'),
    },
    {
      title: 'Enhancement',
      icon: IconName.Language,
      contents:
      t('enhancements_title'),
    },
  ];
  
  const dropdownItems: DropdownItem[] = [
    {
      title: 'Consultation',
      contents: [
        {
          title: t('consultations_title_1'),
          content:
            t('consultations_content_1'),
        },
        {
          title: t('consultations_title_2'),
          content:
          t('consultations_content_2'),
        },
        {
          title: t('consultations_title_3'),
          content:
          t('consultations_content_3'),
        },
      ],
    },
    {
      title: 'Project',
      contents: [
        {
          title: t('projects_title_1'),
          content:
            t('projects_content_1'),
        },
        {
          title: t('projects_title_2'),
          content:
          t('projects_content_2'),
        },
        {
          title: t('projects_title_3'),
          content:
          t('projects_content_3'),
        },
        {
          title: t('projects_title_4'),
          content:
          t('projects_content_4'),
        }
      ],
    },
    {
      title: 'Survey',
      contents: [
        {
          title: t('surveys_title_1'),
          content:
            t('surveys_content_1'),
        },
        {
          title: t('surveys_title_2'),
          content:
          t('surveys_content_2'),
        },
      ],
    },
    {
      title: 'Enhancement',
      contents: [
        {
          title: t('enhancements_title_1'),
          content:
            t('enhancements_content_1'),
        },
        {
          title: t('enhancements_title_2'),
          content:
          t('enhancements_content_2'),
        },
        {
          title: t('enhancements_title_3'),
          content:
          t('enhancements_content_3'),
        },
        {
          title: t('enhancements_title_4'),
          content:
          t('enhancements_content_4'),
        }
      ],
    },
  ];

  return (
    <S.ServiceTitle ref={serviceTitleRef}>
      <Container>
        <Inner>
          <S.ServiceTitleText>Our Services</S.ServiceTitleText>
          <S.ServiceDescriptionBox>
            <S.ServiceDescription>Connecting experts,</S.ServiceDescription>
          </S.ServiceDescriptionBox>
          <S.ServiceDescriptionBox>
            <S.ServiceDescription>unlocking knowledge</S.ServiceDescription>
          </S.ServiceDescriptionBox>
          <S.DescriptionContent style={{wordBreak: 'keep-all'}}>
          </S.DescriptionContent>
          <S.HoverIconWrapper>
            {hoverItem.map(item => (
              <HoverIcon
                key={item.title}
                title={item.title}
                icon={item.icon}
                isSelected={selected === item.title}
                isServiceTitleVisible={isServiceTitleVisible}
                onClick={() => onClick(item.title)}>
                {isMobile && (
                  <S.ExpandedListWrapper>
                    <S.ExpandedListRight>
                      <S.ExpandedListRightDescription style={{wordBreak: 'keep-all'}}>
                        {
                          hoverItem.find(item => item.title === selected)
                            ?.contents
                        }
                      </S.ExpandedListRightDescription>
                    </S.ExpandedListRight>

                    <S.ExpandedListLeft style={{wordBreak: 'keep-all'}}>
                      <SimpleDropdownList
                        dropdownItems={
                          (
                            dropdownItems.find(
                              item => item.title === selected,
                            ) as DropdownItem
                          )?.contents
                        }
                      />
                    </S.ExpandedListLeft>
                  </S.ExpandedListWrapper>
                )}
              </HoverIcon>
            ))}
          </S.HoverIconWrapper>
          {!isMobile && (
            <S.ExpandedListWrapper>
              <S.ExpandedListRight>
                <S.ExpandedListRightTitle>{selected}</S.ExpandedListRightTitle>
                <S.ExpandedListRightDescription style={{wordBreak: 'keep-all'}}>
                  {hoverItem.find(item => item.title === selected)?.contents}
                </S.ExpandedListRightDescription>
              </S.ExpandedListRight>

              <S.ExpandedListLeft>
                <SimpleDropdownList
                  dropdownItems={
                    (
                      dropdownItems.find(
                        item => item.title === selected,
                      ) as DropdownItem
                    )?.contents
                  }
                />
              </S.ExpandedListLeft>
            </S.ExpandedListWrapper>
          )}
        </Inner>
      </Container>
    </S.ServiceTitle>
  );
}

export type HoverItemTitle =
  | 'Consultation'
  | 'Project'
  | 'Survey'
  | 'Enhancement';

interface HoverItem {
  title: HoverItemTitle;
  icon: IconNameType;
  contents: string;
}

interface DropdownItem {
  title: HoverItemTitle;
  contents: SimpleDropdownListItemType[];
}
