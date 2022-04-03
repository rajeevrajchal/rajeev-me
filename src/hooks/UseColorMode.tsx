/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
import React, { useContext, createContext, useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

const colorModeContext = createContext<any>({});
const { Provider } = colorModeContext;

type ColorModeType = 'light' | 'dark';

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ColorModeType>('dark');

  const changeColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
      localStorage.setItem('RA_COLOR_MODE', 'dark');
    } else {
      setColorMode('light');
      localStorage.setItem('RA_COLOR_MODE', 'light');
    }
  };
  const htmlLyout = (
    <span onClick={changeColorMode} className="cursor-pointer">
      {colorMode === 'light' ? <Moon /> : <Sun />}
    </span>
  );

  useEffect(() => {
    const mode: any =
      typeof window !== 'undefined' && localStorage.getItem('RA_COLOR_MODE');
    setColorMode(mode);
  }, []);

  return {
    colorMode,
    htmlLyout,
    setColorMode,
  };
};

// setup provider
export const ColorModeProvider = ({ children }) => {
  const data = useColorMode();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(colorModeContext);
