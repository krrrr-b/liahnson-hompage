import S from 'components/base/Flip/styles';
import { useContext, useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import { IconName } from 'assets/icons';
import { BUTTON_COLORS } from '../Button/constants';
import MediaQueryContext from 'contexts/MediaQueryContext';

interface FlipProps {
  width?: string;
  height?: string;
  isVertical?: boolean;
  isReactive?: boolean;
  imageURL: string;
  title: string;
  content: string[];
}

export default function Flip({
  width,
  height,
  imageURL,
  title,
  content,
  isVertical = false,
  isReactive = false,
}: FlipProps): ReturnType<React.FunctionComponent> {
  const [isFlipped, setIsFlipped] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const { isMobile } = useContext(MediaQueryContext);

  const handleMouseEnter = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsFlipped(false);
    }, 1500);
    setTimerId(id);
  };

  return (
    <S.Wrapper
      width={width}
      height={height}
      isVertical={isVertical}
      isFlipped={isFlipped}
      isReactive={isReactive}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <S.Card>
        <S.Front imageUrl={imageURL}>
          <S.Title isVertical={isVertical}>{title}</S.Title>
          <S.ButtonWrapper style={{wordBreak: 'keep-all'}}>
            <Button
              color={BUTTON_COLORS.TRANSPARENT_WHITE}
              width={isMobile ? '5.8rem' : '6.6rem'}
              height={isMobile ? '5.8rem' : '6.6rem'}
              onClick={() => { }}>
              <Icon
                name={IconName.Plus}
                size='23'
                color={BUTTON_COLORS.TRANSPARENT_WHITE}
              />
            </Button>
          </S.ButtonWrapper>
        </S.Front>
        <S.Back style={{wordBreak: 'keep-all'}} isVertical={isVertical}>
          <S.Title style={{wordBreak: 'keep-all'}} isVertical={isVertical}>{title}</S.Title>
          {content.map((value, key) => (
            <S.Content key={key}>{value}<br/><br/></S.Content>
          ))}
        </S.Back>
      </S.Card>
    </S.Wrapper>
  );
}
