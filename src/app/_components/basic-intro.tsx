import SocialLinks from "@/components/social-links";
import { Flex, Stack, Text, Title } from "@mantine/core";

const work = [
  {
    role: "Frontend Developer",
    company: "Auditbull",
    type: "Remote",
  },
  {
    role: "Software Developer",
    company: "Next Level Value",
    type: "Fulltime",
  },
];

const BasicIntro = () => {
  return (
    <Stack align="center" justify="center" className="w-full h-full">
      <Title order={2} className="text-[30px]">
        I am
      </Title>
      <Title order={2} className="text-[30px]">
        Software Developer | Frontend Development 🧑‍💻
      </Title>
      <Stack gap={0}>
        {work.map((item) => (
          <Flex key={item.company} gap={2}>
            <Text>-</Text>
            <Text>@</Text>
            <Text>
              [{item.type}, {item.role}]
            </Text>
            <Text>{item.company}</Text>
          </Flex>
        ))}
      </Stack>
      <SocialLinks />
    </Stack>
  );
};

export default BasicIntro;
