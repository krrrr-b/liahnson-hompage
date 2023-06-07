import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import S from 'components/base/ScrollingImages/styles';
import Icon from '../Icon';
import { IconName } from 'assets/icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollingImagesProps {
  items: ScrollingImageItem[],
  requireAnimation?: boolean;
  requireDescription?: boolean;
}

export interface ScrollingImageItem {
  src: string;
  top: string;
  left: string;
  number: number;
  unit: string;
  order: number;
  target: string;
  start?: number | 0;
  description?: string;
  background?: string;
  width?: string;
  height?: string;
  titleSize?: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingImages({ items, requireAnimation = true, requireDescription = true }: ScrollingImagesProps) {
  const imageRefs = useRef<(null | HTMLDivElement)[]>([]);
  const descriptionRefs = useRef<(null | HTMLDivElement)[]>([]);
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [numberValues, setNumberValues] = useState<number[]>([]);
  const [targetNumberValues] = useState<number[]>(
    items.map(image => image.number),
  );

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];
    const descriptionItemWidths = descriptionRefs.current.map(
      ref => ref?.getBoundingClientRect().width || 0,
    );

    if (!requireAnimation && !requireDescription) {
      return;
    }

    imageRefs.current.forEach((imgRef, index) => {
      if (imgRef && bottomRef.current) {
        const item = items[index];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imgRef,
            start: `top ${400 + items[index]?.order * 100}px`,
            end: () => {
              if (bottomRef.current) {
                return (
                  bottomRef.current.getBoundingClientRect().top +
                  window.scrollY -
                  window.innerHeight
                );
              }
              return 0;
            },
            scrub: true,
            onUpdate: self => {
              const progress = self.progress;
              const targetNumber = targetNumberValues[index];
              setNumberValues(prevValues => {
                const newValues = [...prevValues];
                newValues[index] = Math.floor(progress * targetNumber);
                return newValues;
              });
            },
          },
        });

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: imgRef,
            start: `top ${400 + items[index]?.order * 100}px`,
            end: () => {
              if (bottomRef.current) {
                return (
                  bottomRef.current.getBoundingClientRect().top +
                  window.scrollY -
                  window.innerHeight
                );
              }
              return 0;
            },
            scrub: true,
          },
        });

        const yOffset =
          bottomRef.current.getBoundingClientRect().top -
          imgRef.getBoundingClientRect().top;
        const descriptionYOffset = yOffset - 200;

        tl.to(imgRef, {
          x: () => {
            const viewportWidth = window.innerWidth;
            const totalWidth =
              descriptionItemWidths.reduce((acc, width) => acc + width, 0) +
              250 * (descriptionItemWidths.length - 1);
            const padding = (viewportWidth - totalWidth) / 2;

            const currentX =
              descriptionRefs.current[index]?.getBoundingClientRect().left;
            const targetX =
              padding +
              descriptionItemWidths
                .slice(0, index)
                .reduce((acc, width) => acc + width + 250, 0);

            return targetX - Number(currentX);
          },
          y: yOffset,
          height: 0,
          opacity: 0,
          duration: 1 / 0.7,
          ease: 'power1.out',
        });

        tl2.to(descriptionRefs.current[index], {
          x: () => {
            const viewportWidth = window.innerWidth;
            const totalWidth =
              descriptionItemWidths.reduce((acc, width) => acc + width, 0) +
              250 * (descriptionItemWidths.length - 1);
            const padding = (viewportWidth - totalWidth) / 2;

            const currentX =
              descriptionRefs.current[index]?.getBoundingClientRect().left;
            const targetX =
              padding +
              descriptionItemWidths
                .slice(0, index)
                .reduce((acc, width) => acc + width + 250, 0);

            return targetX - Number(currentX);
          },
          y: descriptionYOffset,
          opacity: 1,
          duration: 1 / 0.5,
          ease: 'power1.out',
        });

        if (tl.scrollTrigger && tl2.scrollTrigger) {
          scrollTriggers.push(tl.scrollTrigger);
          scrollTriggers.push(tl2.scrollTrigger);
        }
      }
    });

    return () => {
      scrollTriggers.forEach(st => {
        st.kill();
      });
    };
  }, [items]);

  return (
    <S.Container>
      {items.map((item, index) => (
        <S.ImageContainer
          key={index}
          style={{
            top: item.top,
            left: item.left,
          }}>
          {item.src ? (
            <S.Image
              ref={el => {
                if (el && !imageRefs.current.includes(el)) {
                  imageRefs.current.push(el);
                }
              }}
              src={item.src}
            />
          ) : (
            <S.TextContainer
              ref={el => {
                if (el && !imageRefs.current.includes(el)) {
                  imageRefs.current.push(el);
                }
              }}
              style={{
                backgroundColor: item.background,
                opacity: 1,
                width: item.width,
                height: item.height,
              }}>
              <S.TextContainerTitle style={{ fontSize: item.titleSize }}>
                {item.number}
                {item.unit}{' '}
                <Icon
                  name={IconName.Plus}
                  color='var(--color-red-100)'
                  size={'28'}
                />
              </S.TextContainerTitle>
              <S.TextContainerDescription style={{wordBreak: 'keep-all'}}>
                {item.description}
              </S.TextContainerDescription>
            </S.TextContainer>
          )}
          {item.src ? (
            <S.DescriptionWrapper
              ref={el => {
                if (el && !descriptionRefs.current.includes(el)) {
                  descriptionRefs.current.push(el);
                }
              }}>
              <S.UpperDescription>
                <S.Number>
                  {numberValues[index] || item.start}
                  {item.unit}
                </S.Number>
                <Icon
                  name={IconName.Plus}
                  color='var(--color-red-100)'
                  size='28'
                />
              </S.UpperDescription>
              <S.Company>{item.target}</S.Company>
            </S.DescriptionWrapper>
          ) : (
            <S.InvisibleDescriptionWrapper
              ref={el => {
                if (el && !descriptionRefs.current.includes(el)) {
                  descriptionRefs.current.push(el);
                }
              }}
              style={{
                color: 'var(--color-grey-800)',
                display: !requireDescription ? 'none' : '',
              }}>
              <S.UpperDescription>
                <S.Number>
                  {numberValues[index] || 0}
                  {item.unit}
                </S.Number>
                <Icon
                  name={IconName.Plus}
                  color='var(--color-red-100)'
                  size='28'
                />
              </S.UpperDescription>
              <S.Company>{item.target}</S.Company>
            </S.InvisibleDescriptionWrapper>
          )}
        </S.ImageContainer>
      ))}

      <S.Result ref={bottomRef}>
        <S.BottomLineWrapper>
          {requireAnimation ? items.map((item, index) => (
            <S.BottomLineItem
              key={item.target + item.unit + index}
              style={{ left: descriptionRefs.current[index]?.clientLeft }}>
              <S.DescriptionWrapper>
                <S.UpperDescription>
                  <S.Number>
                    {numberValues[index] || item.start}
                    {item.unit}
                  </S.Number>
                  <Icon name={IconName.Plus} color='transparent' size='28' />
                </S.UpperDescription>
                <S.Company>{item.target}</S.Company>
              </S.DescriptionWrapper>
            </S.BottomLineItem>
          )) : <S.BottomLineWrapper />}
        </S.BottomLineWrapper>
      </S.Result>
    </S.Container>
  );
}
