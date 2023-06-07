import React from 'react';
import IconMap, { IconNameType } from 'assets/icons';
import S from 'components/base/Icon/styles';

interface IconProps {
  name: IconNameType;
  width?: string;
  height?: string;
  color?: string;
  size?: string;
  margin?: string;
  weight?: string;
  children?: React.ReactElement;
}

export default function Icon({
  name,
  width,
  height,
  color,
  size = '1.8rem',
  margin,
  children,
  weight = '0.02rem',
}: IconProps): ReturnType<React.FunctionComponent> {
  const Icon = IconMap[name];

  return (
    <S.Wrapper style={{ margin }} color={color}>
      <Icon width={width ?? size} height={height ?? size} strokeWidth={weight}>
        {children}
      </Icon>
    </S.Wrapper>
  );
}
