import { Container, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

import AppFooter from "./_component/app-footer";
import AppHeader from "./_component/app-header";
import AppNavbar from "./_component/app-navbar";
import Headline from "./_component/headline";

const RootTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Container size="3" className="w-screen min-h-screen" p="4">
      <Flex direction="column" gapY="6">
        <AppHeader />
        <Headline />
        <AppNavbar />
        <Flex height="100%" width="100%">
          {children}
        </Flex>
        <AppFooter />
      </Flex>
    </Container>
  );
};

export default RootTemplate;
