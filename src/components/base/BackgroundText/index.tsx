import S from 'components/base/BackgroundText/styles';

interface BackGroundTextProps {
  color?: string;
  upper: string;
  lower: string;
  lowerMobilePosition?: string;
}

export default function BackgroundText({
  color,
  upper,
  lower,
  lowerMobilePosition,
}: BackGroundTextProps): ReturnType<React.FunctionComponent> {
  return (
    <S.Title color={color ?? 'var(--color-grey-000)'}>
      <S.ContentRight>{upper}</S.ContentRight>
      <S.ContentLeft lowerMobilePosition={lowerMobilePosition ?? ''}>
        {lower}
      </S.ContentLeft>
    </S.Title>
  );
}
