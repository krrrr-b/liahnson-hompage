import { IconName } from 'assets/icons';
import Icon from 'components/base/Icon';
import S from 'components/domain/MobileList/styled';

interface MobileListProps {
  items: MobileListItem[];
}

interface MobileListItem {
  count: string;
  label: string;
}

export default function MobileList({
  items,
}: MobileListProps): ReturnType<React.FunctionComponent> {
  return (
    <S.Wrapper>
      <S.MobileList>
        {items.map((item, index) => (
          <S.MobileListItem key={item.label}>
            <S.MobileListScoreWrapper>
              <S.MobileListScore>{item.count}</S.MobileListScore>
              <Icon name={IconName.Plus} color='var(--color-red-100)' />
            </S.MobileListScoreWrapper>
            <S.MobileListLabel>{item.label}</S.MobileListLabel>
          </S.MobileListItem>
        ))}
      </S.MobileList>
    </S.Wrapper>
  );
}
