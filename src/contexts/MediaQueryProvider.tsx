import React, { ReactNode, useState, useEffect } from 'react';
import MediaQueryContext, { MediaQueryContextType } from './MediaQueryContext';
import useMediaQuery from 'hooks/useMediaQuery';

interface MediaQueryProviderProps {
  children: ReactNode;
}

const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
}) => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const value: MediaQueryContextType = { isTablet, isMobile };

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryProvider;
