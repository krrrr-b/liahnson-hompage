import React, { useContext } from 'react';
import { ButtonColor } from 'components/base/Button/constants';
import S from 'components/base/Button/styles';
import MediaQueryContext from 'contexts/MediaQueryContext';

interface ButtonProps {
  children: React.ReactNode;
  width: string;
  height: string;
  fontSize?: string;
  color: ButtonColor;
  transparentBorder?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  width,
  height,
  fontSize,
  color,
  onClick,
  onMouseOver,
  onMouseOut,
  transparentBorder,
}: ButtonProps): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const buttonRect = {
    width: width,
    height: height,
    fontSize: fontSize,
  };

  return (
    <S.Button
      type='button'
      style={buttonRect}
      color={color}
      transparentBorder={transparentBorder}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      isMobile={isMobile}>
      {children}
    </S.Button>
  );
}
