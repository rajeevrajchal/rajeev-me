/* eslint-disable operator-linebreak */
import React, { useContext, createContext, useState, useEffect } from 'react';

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
    <button
      className="btn btn-accent btn-outline capitalize"
      type="button"
      onClick={changeColorMode}
      data-theme={colorMode}
    >
      Color Mode:
      <span>{colorMode}</span>
    </button>
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
