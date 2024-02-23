"use client";

import SocialLinks from "@/components/social-links";
import { Avatar, Flex, Stack, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      gap="xl"
      mt={{
        base: "20px",
        md: "150px",
      }}
      direction={{
        base: "column-reverse",
        md: "row",
      }}
    >
      <Stack className="flex-1">
        <Stack gap={0}>
          <Flex>
            <Title order={1} className="text-[50px]">
              Hello
            </Title>
            <Avatar size="lg" variant="transparent" src="./wave.gif" />
          </Flex>
          <Title order={3}>I am Rajeev Rajchal, </Title>
          <Title order={2} className="text-[30px]">
            Software Developer | Frontend Development 🧑‍💻
          </Title>
          <Title order={3}>Based In Nepal 🇳🇵.</Title>
        </Stack>
        <Text ta="justify">
          I am a skilled software developer with over 4 years of experience
          creating user-centric online apps. Specializing in React, JavaScript,
          TypeScript, Next.js (frontend) and Nest/Express (backend). Experienced
          in collaborative cooperation, efficient workflows, and creative
          problem-solving. Eager to contribute to meaningful initiatives and
          improve internet experiences. 🙂
        </Text>
        <SocialLinks />
      </Stack>
      <Avatar
        visibleFrom="md"
        variant="transparent"
        src="./rajeev-no-bg.png"
        alt="Rajeev Rajchal"
        size="400"
      />
      <Avatar
        hiddenFrom="md"
        variant="transparent"
        src="./rajeev-no-bg.png"
        alt="Rajeev Rajchal"
        size="200"
      />
    </Flex>
  );
};

export default Home;
