"use client";

import SocialLinks from "@/components/social-links";
import { Avatar, Flex, Stack, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <Stack gap="xl">
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
        <Stack className="w-2/3">
          <Title order={3} className="text-[30px]">
            Software Developer | Frontend Development 🧑‍💻
          </Title>
          <Stack gap={0}>
            <Flex align="center">
              <Title order={5}>Hi there!</Title>
              <Avatar
                size="md"
                variant="transparent"
                src="./wave.gif"
                className="mb-1"
              />
            </Flex>
            <Text ta="justify">
              I'm Rajeev, a software developer who loves creating awesome user
              experiences with neat and effective code. With 4 years of
              experience, I've become skilled at building web applications that
              work smoothly.
            </Text>
          </Stack>
          <Text ta="justify">
            Beyond technical expertise, I believe in the power of knowledge
            sharing. That's why I'm actively involved in the developer
            community, contributing insights and collaborating on projects. My
            goal is to not only refine my own skills but also empower others to
            create better web experiences together.
          </Text>
          <SocialLinks />
        </Stack>
        <Avatar
          visibleFrom="md"
          variant="transparent"
          src="./rajeev-no-bg.png"
          alt="Rajeev Rajchal"
          size="300"
        />
        <Avatar
          hiddenFrom="md"
          variant="transparent"
          src="./rajeev-no-bg.png"
          alt="Rajeev Rajchal"
          size="200"
        />
      </Flex>

      <Stack
        mt={{
          base: "20px",
          md: "150px",
        }}
      >
        <Title order={3}>Portfolio</Title>
      </Stack>
    </Stack>
  );
};

export default Home;
