"use client";

import Navbar from "@/components/nav-bar";
import { Container } from "@mantine/core";
import { PropsWithChildren } from "react";

const HomeTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Container
      size="xl"
      className="h-screen px-0 flex flex-col"
      px={{
        base: "xl",
        md: "xl",
        lg: 0,
      }}
    >
      <Navbar />
      {children}
    </Container>
  );
};

export default HomeTemplate;
