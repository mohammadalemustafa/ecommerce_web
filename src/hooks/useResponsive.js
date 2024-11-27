import { useEffect, useState, useDebounce } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLaptop: false,
  });

  useEffect(() => {
    onResizeHandler();

    Setup();

    return () => {
      Cleanup();
    };
  }, []);

  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth >= 480 && window.innerWidth <= 768;
    const isLaptop = window.innerWidth >= 768 && window.innerWidth <= 1025;
    const isDesktop = window.innerWidth > 1025;

    setState({ isMobile, isTablet, isLaptop, isDesktop });
  };

  //   const debouncedCall = useDebounce(onResizeHandler, 500);

  const Setup = () => {
    window.addEventListener("resize", onResizeHandler, false);
  };

  const Cleanup = () => {
    window.removeEventListener("resize", onResizeHandler, false);
  };

  return state;
};

export default useResponsive;
