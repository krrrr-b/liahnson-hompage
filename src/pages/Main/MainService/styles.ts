import styled, { css } from 'styled-components';

const Service = styled.section`
  background-color: var(--color-black-010);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 9rem;
    }
  `}
`;

const DescriptionBox = styled.div`
  display: flex;
  padding: 13.2rem 0 19.4rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      padding: 8.2rem 0 9.4rem;
    }
  `}
`;

const DescriptionTitle = styled.h3`
  flex: 1;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const DescriptionContentWrapper = styled.div`
  flex: 1;
  font-weight: 400;
  font-size: 30px;
  line-height: 55px;
  work-break: keep-all;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      work-break: keep-all;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const DescriptionContent = styled.p`
  work-break: keep-all;
  margin-bottom: 8.3rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      work-break: keep-all;
      margin-bottom: 0;
    }
  `}
`;

const ServiceList = styled.div`
  display: flex;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto 5.4rem auto;
    }
  `}
`;

const ServiceItemTitle = styled.h5`
  margin-bottom: 4.6rem;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  z-index: 2;

  &:hover {
    color: var(--color-red-500);
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      align-self: baseline;
      margin-bottom: 0;
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
    }
  `}
`;

const ServiceItemDescription = styled.p<{ isOpen: boolean }>`
  max-width: 30rem;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  transition: all 0.3s;
  transform: translateY(1rem);
  z-index: 2;

  ${({ isOpen, theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: ${isOpen ? 'block' : 'none'};
      align-self: baseline;
      padding: 3.8rem 0 0.6rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
      text-align: left;
    }
  `}
`;

const DimmedWrapper = styled.div`
  position: absolute;
  top: 0;
  /* left: 50%; */
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
  background-color: #fff;
  transition: transform 0.3s;
`;

const ServiceItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 10.1rem 0rem;
  min-height: 51rem;
  opacity: 1;
  transition: all 0.3s;

  &:not(:last-child) {
    border-right: 1px solid var(--color-grey-300);
  }

  &:hover {
    background-color: #fff;
    ${ServiceItemTitle} {
      color: var(--color-red-500);
    }

    ${ServiceItemDescription} {
      transform: translateY(0rem);
      transition-delay: 0.15s;
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      min-height: 0;
      padding: 3.2rem 0;
      &:not(:last-child) {
        border-right: 0;
        border-bottom: 0.1rem solid var(--color-grey-300);
      }

      &:hover {
        background-color: inherit;
      }
    }
  `}
`;

export default {
  Service,
  DescriptionBox,
  DescriptionTitle,
  DescriptionContentWrapper,
  DescriptionContent,
  ServiceList,
  ServiceItem,
  ServiceItemTitle,
  ServiceItemDescription,
  DimmedWrapper,
};
