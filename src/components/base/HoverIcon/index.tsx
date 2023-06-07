import S from 'components/base/HoverIcon/styles';
import { Children, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { IconNameType } from 'assets/icons';
import { HoverItemTitle } from 'pages/Services/ServiceTitle';

interface HoverIconProps {
  title: string;
  icon: IconNameType;
  isSelected: boolean;
  isServiceTitleVisible: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function HoverIcon({
  title,
  icon,
  onClick,
  isSelected,
  isServiceTitleVisible,
  children,
}: HoverIconProps): ReturnType<React.FunctionComponent> {
  const [isHover, setIsHover] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && isServiceTitleVisible) {
            setIsAtTop(false);
          } else {
            setIsAtTop(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.01,
      },
    );

    observer.observe(wrapperRef.current);
    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, [wrapperRef]);

  return (
    <>
      <S.Wrapper
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHover={isHover}
        onClick={onClick}
        isSelected={isSelected}
        href={`#${title}`}>
        <S.Box isSelected={isSelected} isAtTop={isAtTop}>
          <Icon name={icon} width='22.1rem' height='20rem' />
        </S.Box>
        <S.Title
          id={title}
          isServiceTitleVisible={isServiceTitleVisible}
          isAtTop={isAtTop}
          isHover={isHover}
          isSelected={isSelected}>
          {title}
        </S.Title>
      </S.Wrapper>
      {isSelected && children}
    </>
  );
}
