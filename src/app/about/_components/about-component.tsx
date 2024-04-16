"use client";

import Tabs from "@/components/tabs";
import { Flex } from "@radix-ui/themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";

const AboutComponent = () => {
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
    switch (searchParams.get("tab") || "") {
      case "intro":
        return <p>intro</p>;
      case "experience":
        return <p>experience</p>;
      case "tech":
        return <p>tech</p>;
      default:
        return <p>Not Found</p>;
    }
  };

  useLayoutEffect(() => {
    changeTab(searchParams.get("tab") ? searchParams.get("tab") : "intro");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction="column" gapY="4">
      <Tabs
        active={searchParams.get("tab") || "intro"}
        tabs={[
          {
            label: "Introduction",
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
  );
};

export default AboutComponent;
