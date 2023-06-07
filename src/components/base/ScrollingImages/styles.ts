import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh + 500px);
  position: relative;
  overflow: hidden;
  color: var(--color-grey-000);
`;
const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  transition: all 1.5s ease-in-out;
`;

const Image = styled.img`
  transition: all 1.5s ease-in-out;
  border-radius: 2rem;
  object-fit: cover;
  width: 20vw;
  height: 30vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vw;
  height: 30vh;
  border-radius: 2rem;
  font-size: 7.5rem;
  transition: all 1.5s ease-in-out;
`;

const TextContainerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const TextContainerDescription = styled.div`
  font-size: 25px;
  line-height: 50px;
  margin-left: 2rem;
  padding-bottom: 3rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  transition: all 1.5s ease-in-out;
`;

const InvisibleDescriptionWrapper = styled(DescriptionWrapper)`
  opacity: 0;
`;

const UpperDescription = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.span`
  font-size: 80px;
  line-height: 40px;
  white-space: nowrap;
`;

// @TODO
const Company = styled.span`
  font-size: 25px;
  line-height: 40px;
  margin-left: -50px;
  margin-right: -50px;
`;

const Result = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 90%;
  padding-top: 10rem;
  height: 0.2rem;
  transform: translate(-50%, 0);
`;

const BottomLineWrapper = styled.ul`
  position: absolute;
  top: -22rem;
  left: 50%;
  transform: translate(-51%, 0);
  display: flex;
  color: transparent;
`;

// @TODO 기진
const BottomLineItem = styled.li`
  height: 28rem;
  padding: 0 10.1rem;

  border: 1px solid #ccc;
  border-top: none;
`;

export default {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextContainerTitle,
  TextContainerDescription,
  DescriptionWrapper,
  UpperDescription,
  Number,
  InvisibleDescriptionWrapper,
  Company,
  Result,
  BottomLineItem,
  BottomLineWrapper,
};
