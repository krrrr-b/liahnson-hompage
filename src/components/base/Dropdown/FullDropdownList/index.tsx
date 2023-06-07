import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import useDropdown from 'hooks/useDropdown';
import S from 'components/base/Dropdown/FullDropdownList/styled';
import { IconName } from 'assets/icons';
import { Container, Inner } from 'components/shared';
import { useContext } from 'react';
import MediaQueryContext from 'contexts/MediaQueryContext';
import Button from 'components/base/Button';

export interface FullDropdownListItemType {
  title: string;
  description: string;
  score: string;
  unit: string;
  children: {
    title: string;
    descriptionTitle: string;
    descriptionContent: string;
    content: { title: string; content: string[] }[];
  };
}

interface FullDropdownListProps {
  dropdownItems: FullDropdownListItemType[];
}

export default function FullDropdownList({
  dropdownItems,
}: FullDropdownListProps): ReturnType<React.FunctionComponent> {
  const dropdowns = Array.from({ length: dropdownItems.length }, (_, index) =>
    useDropdown(false),
  );
  const { isTablet } = useContext(MediaQueryContext);

  const handleToggleDropdown = (index: number) => {
    dropdowns[index].toggleDropdown()();
  };
  const onStopPropagation = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.stopPropagation();
    dropdowns[index].toggleDropdown()();
  };

  return (
    <S.Wrapper>
      {dropdownItems?.map((item, index) => {
        return (
          <S.Dropdown
            key={item.title}
            ref={dropdowns[index].dropdownRef}
            isOpen={dropdowns[index].isOpen}
            data-dropdown
            onClick={() => handleToggleDropdown(index)}>
            <Container>
              <Inner>
                <S.DropdownTitleWrapper
                  isLast={index === dropdownItems.length - 1}>
                  <S.DropdownTitle>
                    <span style={{wordBreak: 'keep-all'}}>{item.title}</span>
                    {isTablet && (
                      <Button
                        color={
                          dropdowns[index].isOpen
                            ? BUTTON_COLORS.WHITE
                            : BUTTON_COLORS.RED
                        }
                        width='4.5rem'
                        height='4.5rem'
                        onClick={e => onStopPropagation(e, index)}>
                        <Icon
                          name={
                            dropdowns[index].isOpen
                              ? IconName.Cross
                              : IconName.Plus
                          }
                          color={
                            dropdowns[index].isOpen
                              ? BUTTON_COLORS.WHITE
                              : BUTTON_COLORS.RED
                          }
                        />
                      </Button>
                    )}
                  </S.DropdownTitle>
                  <S.DropdownDescription style={{wordBreak: 'keep-all'}} isOpen={dropdowns[index].isOpen}>
                    {item.description}
                  </S.DropdownDescription>
                  <S.DropdownScoreWrapper>
                    <S.DropdownScore style={{wordBreak: 'keep-all'}}>
                      {item.score}
                      <S.DropdownUnit>{item.unit}</S.DropdownUnit>
                    </S.DropdownScore>

                    {/* <Icon
                      name={IconName.Plus}
                      size='2.5rem'
                      color={
                        dropdowns[index].isOpen
                          ? BUTTON_COLORS.BLACK
                          : 'var(--color-grey-300)'
                      }
                      weight='0.4rem'
                    /> */}
                  </S.DropdownScoreWrapper>
                </S.DropdownTitleWrapper>
              </Inner>
            </Container>

            <S.DropdownContent isOpen={dropdowns[index]?.isOpen}>
              <Container>
                <Inner>
                  <S.ItemWrapper>
                    <S.ItemTitle>{item.children.title}</S.ItemTitle>
                    <S.ItemDescription>
                      <S.ItemDescriptionTitle style={{wordBreak: 'keep-all'}}>
                        {item.children.descriptionTitle}
                      </S.ItemDescriptionTitle>
                      <S.ItemDescriptionContent style={{wordBreak: 'keep-all'}}>
                        {item.children.descriptionContent}
                      </S.ItemDescriptionContent>
                    </S.ItemDescription>
                    <S.ItemContentWrapper>
                      {item.children.content.map(item => (
                        <S.ItemContent key={item.title}>
                          <S.ItemContentTitle style={{wordBreak: 'keep-all'}}>{item.title}</S.ItemContentTitle>
                          <S.ItemContentDescriptionWrapper style={{wordBreak: 'keep-all'}}>
                            {item.content.map(item => (
                              <S.ItemContentDescription key={item}>
                                {item}
                              </S.ItemContentDescription>
                            ))}
                          </S.ItemContentDescriptionWrapper>
                          <div></div>
                        </S.ItemContent>
                      ))}
                    </S.ItemContentWrapper>
                  </S.ItemWrapper>

                  {/* {item.children} */}
                </Inner>
              </Container>
            </S.DropdownContent>
          </S.Dropdown>
        );
      })}
    </S.Wrapper>
  );
}
