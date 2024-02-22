"use client";

import SocialLinks from "@/components/social-links";
import { Avatar, Box, Flex, Stack, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <Flex align="center" justify="space-between" gap="xl" mt="150px">
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
        <Text className="w-2/3" ta="justify">
          I am a skilled software developer with over 4 years of experience
          creating user-centric online apps. Specializing in React, JavaScript,
          TypeScript, Next.js (frontend) and Nest/Express (backend). Experienced
          in collaborative cooperation, efficient workflows, and creative
          problem-solving. Eager to contribute to meaningful initiatives and
          improve internet experiences. 🙂
        </Text>
        <SocialLinks />
      </Stack>
      <Box className="w-fit">
        <Avatar
          variant="transparent"
          src="./rajeev-no-bg.png"
          alt="Rajeev Rajchal"
          size="400"
        />
      </Box>
    </Flex>
  );
};

export default Home;
