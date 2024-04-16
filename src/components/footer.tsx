import { Flex, Text } from "@radix-ui/themes";
import SocialLink from "./social-links";

const date = new Date().getFullYear();
const AppFooter = () => {
  return (
    <Flex align="center" justify="center" direction="column" gapY="3">
      <SocialLink />
      <Text>rajeev rajchal © {date}</Text>
    </Flex>
  );
};

export default AppFooter;
