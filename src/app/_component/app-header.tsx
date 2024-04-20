import SocialLink from "@/components/social-links";
import { Avatar, Flex } from "@radix-ui/themes";
import DownloadResume from "./download-resume";

const AppHeader = () => {
  return (
    <Flex
      align="center"
      justify="between"
      height="6vh"
      position="sticky"
      top="0"
      left="0"
      className="bg-white z-50"
    >
      <Avatar radius="full" fallback="RR" src="./rajeev-logo.png" />

      <Flex align="center" gapX="4">
        <SocialLink />
        <DownloadResume />
        {/* <ColorModeSwitch /> */}
      </Flex>
    </Flex>
  );
};

export default AppHeader;
