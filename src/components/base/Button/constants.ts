export const BUTTON_COLORS = {
  WHITE: 'white',
  BLACK: 'black',
  TRANSPARENT_WHITE: 'transparent-white',
  TRANSPARENT_BLACK: 'transparent-black',
  RED: 'red',
  PALE_RED: 'pale-red',
  GREY: 'grey',
  LIGHT_GREY: 'light-grey',
  SHADOW: 'shadow',
} as const;

export type ButtonColor = (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];
