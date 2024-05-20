import { Container, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

import AppFooter from "./_component/app-footer";
import AppHeader from "./_component/app-header";
import AppNavbar from "./_component/app-navbar";
import Headline from "./_component/headline";

const RootTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Container size="3" className="min-h-screen" p="4">
      <Flex direction="column" gapY="4">
        <AppHeader />
        <Headline />
        <AppNavbar />
        {children}
        <AppFooter />
      </Flex>
    </Container>
  );
};

export default RootTemplate;
