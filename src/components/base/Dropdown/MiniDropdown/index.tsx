import { ButtonColor } from 'components/base/Button/constants';
import Button from 'components/base/Button';
import Icon from 'components/base/Icon';
import useDropdown from 'hooks/useDropdown';
import S from 'components/base/Dropdown/MiniDropdown/styles';
import { IconName } from 'assets/icons';

export interface MiniDropdownItemType {
  label: string;
  onClick: () => void;
  selected: boolean;
}

interface DropdownProps {
  width: string;
  height: string;
  color: ButtonColor;
  dropDownItems: MiniDropdownItemType[];
  isMobile?: boolean;
}

export default function MiniDropDown({
  width,
  height,
  color,
  dropDownItems,
  isMobile = false,
}: DropdownProps): ReturnType<React.FunctionComponent> {
  const { dropdownRef, isOpen, toggleDropdown } = useDropdown();

  const sortedDropDownItems = dropDownItems.sort((a, b) =>
    a.selected === b.selected ? 0 : a.selected ? -1 : 1,
  );
  const selected = sortedDropDownItems[0];

  const children = (
    <S.SelectedWrapper>
      <S.Selected>{selected.label}</S.Selected>
      <Icon
        name={IconName.ChevronDown}
        margin='0 0 0 1rem'
        color={color}
        size={isMobile ? '1rem' : '1.6rem'}
      />
    </S.SelectedWrapper>
  );

  return (
    <S.Wrapper ref={dropdownRef}>
      <Button
        width={width}
        height={height}
        color={color}
        transparentBorder={isOpen}
        onClick={toggleDropdown()}>
        {children}
      </Button>
      <S.Inner>
        {isOpen && (
          <S.DropdownWrapper>
            {sortedDropDownItems.map((item, index) => (
              <S.DropdownItem
                style={{ width: width, height: height }}
                key={item.label}
                onClick={toggleDropdown(item.onClick)}
                hasDropdown={index === 0}>
                {item.label}
                {index === 0 && (
                  <Icon
                    name={IconName.ChevronDown}
                    margin='0 0 0 1rem'
                    size={isMobile ? '1rem' : '1.6rem'}
                  />
                )}
              </S.DropdownItem>
            ))}
          </S.DropdownWrapper>
        )}
      </S.Inner>
    </S.Wrapper>
  );
}
