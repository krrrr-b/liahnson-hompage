import styled from 'styled-components';
import { BUTTON_COLORS } from '../Button/constants';

const getColorStyles = (color: string | undefined) => {
  switch (color) {
    case BUTTON_COLORS.WHITE:
    case BUTTON_COLORS.GREY:
    case BUTTON_COLORS.TRANSPARENT_BLACK:
      return `
      var(--color-grey-800);
      `;
    case BUTTON_COLORS.BLACK:
    case BUTTON_COLORS.RED:
    case BUTTON_COLORS.PALE_RED:
    case BUTTON_COLORS.TRANSPARENT_WHITE:
    case BUTTON_COLORS.LIGHT_GREY:
      return `
          var(--color-grey-000);
      `;
    default:
      return color ? color : '';
  }
};

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  path {
    stroke: ${({ color }) => getColorStyles(color)};
  }
`;

export default { Wrapper };
