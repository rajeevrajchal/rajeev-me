"use client";
import useColorTheme from "@/hooks/use-color-theme";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const ColorModeSwitch = () => {
  const { mode, onChangeColorMode } = useColorTheme();

  if (mode === "dark") {
    return (
      <IoIosSunny
        className="select-none cursor-pointer"
        onClick={() => onChangeColorMode()}
        size={22}
      />
    );
  }

  return (
    <FaRegMoon
      className="select-none cursor-pointer"
      size={22}
      onClick={() => onChangeColorMode()}
    />
  );
};

export default ColorModeSwitch;
