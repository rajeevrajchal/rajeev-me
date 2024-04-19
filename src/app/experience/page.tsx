import { Avatar, Flex, Text } from "@radix-ui/themes";

const Experience = async () => {
  return (
    <Flex direction="column" gapY="8" width="100%">
      <Text size="4" weight="bold">
        Mid-Level Software Developer with 4 years of experience in the software
        industry
      </Text>
      <Flex direction="column" gapY="8" className="w-full overflow-x-hidden">
        {[1, 2, 3, 4].map((experience: any, index: number) => (
          <Flex
            gap="6"
            key={`experience-${experience?.id}-${index}`}
            className="flex-col items-center md:flex-row md:items-start"
          >
            <Avatar
              size="8"
              fallback={experience?.icon?.external?.url || "NLV"}
            />
            <Flex direction="column" gapY="1">
              <Text weight="bold">Software Developer</Text>
              <Flex gapX="2">
                <Text weight="medium">Next Level Value</Text>
                <Text>@</Text>
                <Text className="text-gray-500">2022</Text>
                <Text className="text-gray-500">-</Text>
                <Text className="text-gray-500">2024</Text>
              </Flex>
              <ul className="px-8 flex flex-col gap-y-1">
                <li className="list-disc text-gray-500  text-md">
                  Developed front-end user interface using React, React Native
                  and JavaScript for Web Apps, iOS and Android mobile
                  applications.
                </li>
                <li className="list-disc text-gray-500  text-md">
                  Developed front-end user interface using React, React Native
                  and JavaScript for Web Apps, iOS and Android mobile
                  applications.
                </li>
              </ul>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Experience;
