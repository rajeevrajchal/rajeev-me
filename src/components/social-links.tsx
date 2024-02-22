import { ActionIcon, Flex } from "@mantine/core";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socializes = [
  {
    icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/rajeevrajchal/",
    label: "linkedin",
    key: "linkedin",
  },
  {
    icon: <FaGithub size={24} />,
    link: "https://github.com/rajeevrajchal/",
    label: "github",
    key: "github",
    color: "black",
  },
];
const SocialLinks = () => {
  return (
    <Flex align="center" gap="md">
      {socializes.map((item) => (
        <ActionIcon
          title={item.label}
          href={item.link}
          component={Link}
          key={item.key}
          target="_blank"
          variant="light"
          size="xl"
        >
          {item.icon}
        </ActionIcon>
      ))}
    </Flex>
  );
};

export default SocialLinks;
