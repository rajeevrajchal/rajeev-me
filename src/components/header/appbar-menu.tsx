"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
];

const AppbarMenu = () => {
  const pathname = usePathname();

  return (
    <Flex gapX="8">
      {menu.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.href}
            key={`social-link-${item.label}-${index}`}
            className={`${
              isActive ? "text-blue-500" : "inherit"
            } text-md hover:text-blue-500`}
          >
            {item.label}
          </Link>
        );
      })}
    </Flex>
  );
};

export default AppbarMenu;
