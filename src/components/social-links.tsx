import social_links from "@/constants/social-link";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";

const SocialLink = () => {
  return (
    <Flex align="center" gapX="4">
      {social_links.map((item, index) => (
        <Link
          href={item.href}
          target="_blank"
          key={`social-link-${item.label}-${index}`}
          className={`${item.color} hover:brightness-90`}
        >
          {item.icon}
        </Link>
      ))}
    </Flex>
  );
};

export default SocialLink;
