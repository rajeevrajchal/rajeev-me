import { Avatar, Flex, Text } from "@radix-ui/themes";
import SocialLink from "../social-links";
import AppbarMenu from "./appbar-menu";

const Appbar = () => {
  return (
    <Flex
      align="center"
      justify="between"
      height="6vh"
      position="sticky"
      top="0"
      left="0"
      className="z-50 bg-white"
    >
      <Flex align="center" gapX="2">
        <Avatar radius="full" fallback="RR" />
        <Text as="p" weight="bold">
          Rajeev Rajchal
        </Text>
      </Flex>
      <Flex align="center" gapX="8">
        <AppbarMenu />
        <SocialLink />
      </Flex>
    </Flex>
  );
};

export default Appbar;
