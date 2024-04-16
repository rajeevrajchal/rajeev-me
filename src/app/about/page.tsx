"use client";

import Tabs from "@/components/tabs";
import { Flex } from "@radix-ui/themes";
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Headline from "./_components/headline";

const About = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeTab = (value?: string | null) => {
    if (value && value !== null) {
      router.push(`${pathname}?tab=${value}`, undefined);
    } else {
      router.push(pathname, undefined);
    }
  };

  const getComponent = () => {
    switch (searchParams.get("tab")) {
      case "intro":
        return <p>intro</p>;
      case "experience":
        return <p>experience</p>;
      case "tech":
        return <p>tech</p>;
      default:
        return notFound();
    }
  };

  return (
    <Flex direction="column" height="100%" gapY="6">
      <Headline />
      <Flex direction="column" gapY="4">
        <Tabs
          active={searchParams.get("tab") || "intro"}
          tabs={[
            {
              label: "Intro",
              key: "intro",
            },
            {
              label: "Experience",
              key: "experience",
            },
            {
              label: "Tech",
              key: "tech",
            },
          ]}
          onChangeTab={(key: string) => changeTab(key)}
        />
        <Flex>{getComponent()}</Flex>
      </Flex>
    </Flex>
  );
};

export default About;
