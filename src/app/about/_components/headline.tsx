import { Flex, Heading, Text } from "@radix-ui/themes";
import { FaLocationDot } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Headline = () => {
  return (
    <Flex direction="column" gapY="2">
      <Heading as="h6">Rajeev Rajchal</Heading>
      <Text>Software Developer | Focus Frontend Developer</Text>
      <Flex align="center" gapX="4">
        <Flex align="center" gapX="2">
          <FiBriefcase size={20} />
          <Text as="p" size="2">
            Open to work
          </Text>
        </Flex>
        <Flex align="center" gapX="2">
          <FaLocationDot size={18} />
          <Text as="p" size="2">
            Aarhus, Denmark
          </Text>
        </Flex>
        <Flex align="center" gapX="2">
          <MdEmail size={20} />
          <Text as="p" size="2">
            rajeevrajchal12@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Headline;
