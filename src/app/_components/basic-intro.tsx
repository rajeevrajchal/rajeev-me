import SocialLinks from "@/components/social-links";
import {
  Avatar,
  Center,
  Flex,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const BasicIntro = () => {
  return (
    <Flex
      align={{
        base: "flex-start",
        md: "center",
      }}
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
      <Stack className="w-full md:w-2/3">
        <Title order={2} className="text-[30px]">
          Software Developer | Frontend Development 🧑‍💻
        </Title>
        <Stack gap={0}>
          <Flex align="center">
            <Title order={3}>Hi there!</Title>
            <Avatar
              size="md"
              variant="transparent"
              src="./wave.gif"
              className="mb-1"
            />
          </Flex>
          <Text size="lg">
            I'm Rajeev, a software developer who loves creating awesome user
            experiences with neat and effective code. With 4 years of
            experience, I've become skilled at building web applications that
            work smoothly.
          </Text>
        </Stack>
        <Text size="lg">
          Beyond technical expertise, I believe in the power of knowledge
          sharing. That's why I'm actively involved in the developer community,
          contributing insights and collaborating on projects. My goal is to not
          only refine my own skills but also empower others to create better web
          experiences together.
        </Text>
        <SocialLinks />
      </Stack>
      <Center className="w-full md:w-fit">
        <Paper withBorder radius="lg" p="xs" h="auto" w={300}>
          <Image radius="md" src="./rajeev-mountain.jpg" alt="Rajeev Rajchal" />
        </Paper>
      </Center>
    </Flex>
  );
};

export default BasicIntro;
