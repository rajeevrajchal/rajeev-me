"use client";

import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import useCookies from "./use-cookies";

export type COLOR_THEME = "light" | "dark" | "inherit" | undefined;

interface ColorThemeContextType {
  mode: COLOR_THEME;
  onChangeColorMode: () => void;
}

const ColorThemeContext = createContext<ColorThemeContextType>({
  mode: "dark",
  onChangeColorMode: () => {},
});

const { Provider } = ColorThemeContext;

const useColorThemeData = () => {
  const { getStorageData, setStorageData } = useCookies();

  const [currentTheme, setCurrentTheme] = useState(
    () => getStorageData("theme") || "light"
  );

  const onChangeColorMode = async () => {
    if (currentTheme === "dark") {
      setStorageData("theme", "light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setCurrentTheme("light");
    } else {
      setStorageData("theme", "dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setCurrentTheme("dark");
    }
  };

  return {
    mode: currentTheme,
    onChangeColorMode,
  };
};

export const ColorThemeProvider = ({
  children,
}: {
  children: ReactElement | ReactNode;
}) => {
  const data: any = useColorThemeData();
  return <Provider value={data}>{children}</Provider>;
};

const useColorTheme = () => useContext(ColorThemeContext);

export default useColorTheme;
