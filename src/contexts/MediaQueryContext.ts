import { createContext } from 'react';

export interface MediaQueryContextType {
  isTablet: boolean;
  isMobile: boolean;
}

const MediaQueryContext = createContext({
  isTablet: false,
  isMobile: false,
});

export default MediaQueryContext;
