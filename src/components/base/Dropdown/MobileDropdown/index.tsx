import { IconName } from 'assets/icons';
import Button from 'components/base/Button';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import S from 'components/base/Dropdown/MobileDropdown/styles';
import Icon from 'components/base/Icon';
import useDropdown from 'hooks/useDropdown';

interface MobileDropdownProps {
  dropdownItems: DropdownItem[];
}

interface DropdownItem {
  score: string;
  label: string;
  description: string;
}

export default function MobileDropdown({
  dropdownItems,
}: MobileDropdownProps): ReturnType<React.FunctionComponent> {
  const dropdowns = Array.from({ length: dropdownItems.length }, (_, index) =>
    useDropdown(false),
  );
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
      {dropdownItems.map((item, index) => (
        <S.Item
          key={item.label}
          ref={dropdowns[index].dropdownRef}
          onClick={() => handleToggleDropdown(index)}>
          <S.Upper>
            <S.TextWrapper>
              <S.ScoreWrapper style={{wordBreak: 'keep-all'}}>
                <S.Score>{item.score}</S.Score>
                <Icon
                  name={IconName.Plus}
                  size='25'
                  color='var(--color-red-500)'
                />
              </S.ScoreWrapper>
              <S.Label style={{wordBreak: 'keep-all'}}>{item.label}</S.Label>
            </S.TextWrapper>
            <Button
              color={
                dropdowns[index].isOpen
                  ? BUTTON_COLORS.SHADOW
                  : BUTTON_COLORS.RED
              }
              width='4.5rem'
              height='4.5rem'
              onClick={e => onStopPropagation(e, index)}>
              <Icon
                name={dropdowns[index].isOpen ? IconName.Cross : IconName.Plus}
                color={
                  dropdowns[index].isOpen
                    ? 'var(--color-grey-300)'
                    : BUTTON_COLORS.RED
                }
              />
            </Button>
          </S.Upper>
          <S.Description isOpen={dropdowns[index].isOpen} style={{wordBreak: 'keep-all'}}>
            {item.description}
          </S.Description>
        </S.Item>
      ))}
    </S.Wrapper>
  );
}
