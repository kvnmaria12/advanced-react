import { useEffect, useState } from 'react';

const useResizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  console.log(width);

  useEffect(() => {
    const listner = () => {
      setWidth(window.outerWidth);
    };

    window.addEventListener('resize', listner);

    return () => window.removeEventListener('resize', listner);
  }, []);

  return {
    isOpen,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
  };
};

export default useResizer;
