import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { TiAdjustBrightness } from "react-icons/ti";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";

const ColorSwitch = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleColorSwitch = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <ActionIcon
      variant="transparent"
      aria-label="Color Swatch"
      onClick={handleColorSwitch}
    >
      {colorScheme !== "light" ? (
        <TiAdjustBrightness size={24} color="white" />
      ) : (
        <WiMoonAltWaningCrescent5 size={24} color="black" />
      )}
    </ActionIcon>
  );
};

export default ColorSwitch;
