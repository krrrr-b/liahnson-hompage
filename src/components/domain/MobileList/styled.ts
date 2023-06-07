import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: none;
  color: var(--color-grey-000);
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `}
`;

const MobileList = styled.ul``;

const MobileListItem = styled.li`
  padding: 3.9rem 0 6rem;
  border-top: 2px solid var(--color-red-100);
`;

const MobileListScoreWrapper = styled.div`
  display: fl;
`;

const MobileListScore = styled.div`
  margin-bottom: 1.1rem;
  font-weight: 400;
  font-size: 60px;
  line-height: 40px;
`;
const MobileListLabel = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
`;

export default {
  Wrapper,
  MobileList,
  MobileListItem,
  MobileListScoreWrapper,
  MobileListLabel,
  MobileListScore,
};
