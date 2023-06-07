import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleMediaChange = (e: MediaQueryListEvent) => setIsMatch(e.matches);

    setIsMatch(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaChange);
    };
  }, [query]);

  return isMatch;
};

export default useMediaQuery;
