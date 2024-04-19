import SocialLink from "@/components/social-links";
import { Avatar, Button, Flex } from "@radix-ui/themes";
import { IoCloudDownloadOutline } from "react-icons/io5";

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
        <Button variant="soft" radius="full" className="w-fit">
          <IoCloudDownloadOutline />
          <span>Resume</span>
        </Button>
        {/* <ColorModeSwitch /> */}
      </Flex>
    </Flex>
  );
};

export default AppHeader;
