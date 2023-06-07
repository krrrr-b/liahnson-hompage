import { useContext, useState } from 'react';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Button from 'components/base/Button';
import Icon from 'components/base/Icon';
import useDropdown from 'hooks/useDropdown';
import S from 'components/base/Dropdown/SimpleDropdownList/styles';
import { IconName } from 'assets/icons';
import MediaQueryContext from 'contexts/MediaQueryContext';

export interface SimpleDropdownListItemType {
  title: string;
  content: string;
}

interface DropdownProps {
  dropdownItems: SimpleDropdownListItemType[];
}

export default function SimpleDropdownList({
  dropdownItems,
}: DropdownProps): ReturnType<React.FunctionComponent> {
  const dropdowns = Array.from({ length: 3 }, () => useDropdown(false));
  const [firstRender, setFirstRender] = useState(Array(3).fill(true));
  const { isMobile } = useContext(MediaQueryContext);

  const onStopPropagation = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    dropdowns[index].toggleDropdown()();
    dropdowns.forEach((item, i) => i !== index && item.setIsOpen(false));
    e.stopPropagation();
  };

  return (
    <S.Wrapper>
      {dropdownItems?.map((item, index) => {
        if (dropdowns[index] === undefined) {
          // 드롭다운 아이템이 변경될 시, 찾을 수 없어 에러를 반환하는 경우가 많아 강제 RETURN
          return;
        }

        return (
          <S.Dropdown
            isOpen={dropdowns[index].isOpen}
            key={index}
            ref={dropdowns[index].dropdownRef}
            data-dropdown>
            <S.DropdownTitleWrapper onClick={dropdowns[index].toggleDropdown()}>
              <S.DropdownTitle>{item.title}</S.DropdownTitle>
              <S.DropdownIcon>
                <Button
                  color={BUTTON_COLORS.GREY}
                  width='6rem'
                  height='6rem'
                  onClick={e => onStopPropagation(e, index)}>
                  {dropdowns[index].isOpen ? (
                    <Icon
                      name={IconName.Cross}
                      size='20'
                      color={BUTTON_COLORS.GREY}
                    />
                  ) : (
                    <Icon
                      name={IconName.Plus}
                      size='20'
                      color={BUTTON_COLORS.BLACK}
                    />
                  )}
                </Button>
              </S.DropdownIcon>
            </S.DropdownTitleWrapper>
            <S.DropdownContent
              style={{wordBreak: 'keep-all'}}
              isOpen={dropdowns[index]?.isOpen || isMobile}
              isFirstRender={firstRender[index]}>
              {item.content}
            </S.DropdownContent>
          </S.Dropdown>
        );
      })}
    </S.Wrapper>
  );
}
