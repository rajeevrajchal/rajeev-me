import navbar, { NAVBAR } from "@/constant/navbar";
import { Button, Center, Flex, NavLink, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { FiDownloadCloud } from "react-icons/fi";
import ColorSwitch from "./color-switch";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Flex
      py="xs"
      align="center"
      justify="space-between"
      pos="sticky"
      w="100%"
      top="0"
    >
      <Text fw="bold" size="lg">
        Rajeev Rajchal
      </Text>
      <Center visibleFrom="md">
        <Flex gap="lg">
          {navbar.map((item: NAVBAR) => (
            <NavLink
              key={item.key}
              href={item.url}
              label={item.label}
              className="capitalize hover:rounded-lg"
              leftSection={item.icon}
              variant="subtle"
              active={item.url === pathname}
            />
          ))}
        </Flex>
      </Center>
      <Flex align="center" gap="md">
        <ColorSwitch />
        <Button variant="subtle" leftSection={<FiDownloadCloud size={22} />}>
          Resume
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
