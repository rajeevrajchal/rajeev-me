"use client";

import TabsNav from "@/components/tabs";
import { Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const AppNavbar = () => {
  const pathname = usePathname();

  return (
    <Box position="sticky" top="6vh" left="0" className="bg-white z-50">
      <TabsNav
        active={pathname}
        tabs={[
          {
            label: "Introduction",
            key: "/",
            href: "/",
          },
          {
            label: "Experience",
            key: "/experience",
            href: "/experience",
          },
          {
            label: "Projects",
            key: "/projects",
            href: "/projects",
          },
          // {
          //   label: "Tech",
          //   key: "/tech",
          //   href: "/tech",
          // },
        ]}
      />
    </Box>
  );
};

export default AppNavbar;
