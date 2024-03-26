import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { TiAdjustBrightness } from "react-icons/ti";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";

const ColorSwitch = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleColorSwitch = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  console.log("colorScheme", colorScheme);

  return (
    <ActionIcon
      variant="transparent"
      aria-label="Color Swatch"
      onClick={handleColorSwitch}
    >
      {colorScheme === "light" ? (
        <WiMoonAltWaningCrescent5 size={24} color="black" />
      ) : (
        <TiAdjustBrightness size={24} color="white" />
      )}
    </ActionIcon>
  );
};

export default ColorSwitch;
