import SocialLink from "@/components/social-links";
import { Flex, Text } from "@radix-ui/themes";

const date = new Date().getFullYear();
const AppFooter = () => {
  return (
    <Flex align="center" justify="center" direction="column" gapY="2">
      <SocialLink />
      <Text>rajeev rajchal © {date}</Text>
    </Flex>
  );
};

export default AppFooter;
