import S from 'components/base/Button/ArrowButton/styles';
import { BUTTON_COLORS, ButtonColor } from 'components/base/Button/constants';
import Button from 'components/base/Button';
import Icon from 'components/base/Icon';
import { IconName } from 'assets/icons';
import { useContext, useState } from 'react';
import MediaQueryContext from 'contexts/MediaQueryContext';

interface ArrowButtonProps {
  color: ButtonColor;
  onClick: () => void;
  name: string;
  width?: string;
}

export default function ArrowButton({
  color,
  name,
  onClick,
  width,
}: ArrowButtonProps): ReturnType<React.FunctionComponent> {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const { isMobile } = useContext(MediaQueryContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const onTouchStart = () => {
    setIsTouched(true);
  };

  const onTouchEnd = () => {
    setIsTouched(false);
  };

  const onMouseDown = () => {
    setIsMouseDown(true);
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
    setIsHovered(false);
  };

  const buttonColor =
    isHovered || isTouched || isMouseDown ? BUTTON_COLORS.PALE_RED : color;

  return (
    <S.ArrowButton
      onMouseEnter={handleMouseEnter}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}>
      <Button
        color={buttonColor}
        width={width ? width : isMobile ? '18rem' : '28rem'}
        height={isMobile ? '4.5rem' : '6.6rem'}
        fontSize={isMobile ? '1.5rem' : '2.5rem'}
        onClick={onClick}>
        {name}
      </Button>
      <Button
        color={buttonColor}
        width={isMobile ? '4.5rem' : '6.6rem'}
        height={isMobile ? '4.5rem' : '6.6rem'}
        onClick={onClick}>
        <Icon
          name={IconName.ArrowRight}
          size={isMobile ? '2.5rem' : '3.7rem'}
          color={buttonColor}
        />
      </Button>
    </S.ArrowButton>
  );
}
