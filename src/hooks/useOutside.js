import { useState, useEffect, useRef } from 'react';

export const useOutside = (init, type) => {
  const [isShown, setIsShown] = useState(init);
  const ref = useRef(null);

  const handleHoverOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener(type, handleHoverOutside, true);

    return () => {
      document.removeEventListener(type, handleHoverOutside, true);
    };
  });
  return { ref, isShown, setIsShown };
};
