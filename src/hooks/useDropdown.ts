import { useState, useRef, useEffect } from 'react';

const useDropdown = (initialState = false, closeOnOutsideClick = true) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (callback?: () => void) => () => {
    setIsOpen(!isOpen);
    callback && callback();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && closeOnOutsideClick) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    isOpen
      ? document.addEventListener('click', handleClickOutside)
      : document.removeEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return { dropdownRef, isOpen, toggleDropdown, setIsOpen };
};

export default useDropdown;
