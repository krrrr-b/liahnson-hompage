import styled, { css } from 'styled-components';

const Footer = styled.footer`
  padding: 13rem 0rem 13rem;
  background-color: var(--color-grey-800);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 8.1rem 0 9.4rem;
    }
  `}
`;

const Upper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.3rem;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
    }
  `}
`;

const UpperTitle = styled.h5`
  margin-bottom: 5.9rem;
  color: var(--color-grey-000);
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 2.7rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const UpperLeft = styled.div`
  flex: 2;
  color: var(--color-grey-000);
  font-size: 3rem;
  line-height: 3.58rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 10rem;
    }
  `}
`;

const UpperDescription = styled.p`
  margin-bottom: 8.6rem;
  color: var(--color-grey-000);
  font-weight: 510;
  font-size: 7rem;
  line-height: 9rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 6.7rem;
      font-weight: 400;
      font-size: 30px;
      line-height: 40px;
    }
  `}
`;

const StrongWord = styled.b`
  font-weight: 700;
  white-space: nowrap;
`;

const UpperButtonBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  * + * {
    margin-top: 2.9rem;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: row;
      gap: 2.5rem;
    }
  `}
`;

const ImageBox = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 14.7rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 5.8rem;
    }
  `}
`;

const FooterImage = styled.img`
  max-width: 94.8rem;
  width: 100%;
  height: 60.3rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  object-fit: cover;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      border-radius: 0;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 52rem;
      height: 47rem;
    }
  `}
`;

const FooterVideo = styled.video`
  max-width: 94.8rem;
  width: 100%;
  height: 60.3rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  object-fit: cover;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      border-radius: 0;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 52rem;
      height: 47rem;
    }
  `}
`;

const LowerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5.6rem;
  border-bottom: 1px solid var(--color-grey-300);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      align-items: baseline;
      gap: 5rem;
    }
  `}
`;

const LowerRight = styled.div``;

const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3.5rem;
`;

const LowerBottom = styled.div`
  padding-top: 5.6rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-top: 4.1rem;
    }
  `}
`;

const FooterItem = styled.li`
  color: var(--color-grey-000);
  font-size: 20px;
  line-height: 44px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 12px;
      line-height: 18px;
    }
  `}
`;

const Contacts = styled.div`
  display: flex;
  gap: 3.5rem;
  padding-top: 1.36rem;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      align-items: baseline;
      gap: 0;
      padding-top: 0;
    }
  `}
`;

const Address = styled.span`
  font-size: 20px;
  line-height: 44px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 24rem;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const Email = styled.span`
  font-size: 20px;
  line-height: 44px;
  font-weight: 700;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const ContactButton = styled.button`
  font: inherit;
  color: inherit;
`;

const BottomFooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3.5rem;
  justify-content: flex-start;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      position: relative;
      align-items: baseline;
    }
  `}
`;

const PolicyWrapper = styled.ul`
  display: flex;
  gap: 4.2rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      align-items: baseline;
      gap: 1rem;
    }
  `}
`;

const FooterBottomSection = styled.section`
  position: relative;
`;

const GoToTopWrapper = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      position: absolute;
      top: 1.9rem;
      right: 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.9rem;
      cursor: pointer;
    }
  `}
`;

const GoToTopTitle = styled.span`
  color: var(--color-grey-000);
  font-weight: 510;
  font-size: 10px;
  line-height: 12px;
`;

const GoToTopWrapperLarge = styled.div`
  position: absolute;
  top: -8rem;
  right: -10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  cursor: pointer;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      top: -6.5rem;
      right: -8rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const GoToTopTitleLarge = styled.span`
  color: var(--color-grey-000);
  font-weight: 510;
  font-size: 20px;
  line-height: 24px;
`;

export default {
  Footer,
  Upper,
  UpperLeft,
  UpperDescription,
  UpperButtonBox,
  ImageBox,
  FooterImage,
  FooterVideo,
  LowerTop,
  LowerBottom,
  FooterItem,
  LowerRight,
  UpperTitle,
  FooterList,
  Contacts,
  Address,
  Email,
  ContactButton,
  BottomFooterList,
  PolicyWrapper,
  StrongWord,
  FooterBottomSection,
  GoToTopWrapperLarge,
  GoToTopTitle,
  GoToTopWrapper,
  GoToTopTitleLarge,
};
