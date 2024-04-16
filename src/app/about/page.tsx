import { Flex } from "@radix-ui/themes";
import { Suspense } from "react";
import AboutComponent from "./_components/about-component";
import Headline from "./_components/headline";

const About = () => {
  return (
    <Flex direction="column" height="100%" gapY="6">
      <Headline />
      <Suspense fallback={<p>Loading</p>}>
        <AboutComponent />
      </Suspense>
    </Flex>
  );
};

export default About;
