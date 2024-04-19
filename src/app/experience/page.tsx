import { Avatar, Button, Flex, Text } from "@radix-ui/themes";
import { map } from "lodash";
import moment from "moment";
import { getExperience } from "./actions";

const Experience = async () => {
  const { data: experiences } = await getExperience();

  return (
    <Flex direction="column" gapY="4" width="100%">
      <Text size="4" weight="bold">
        Mid-Level Software Developer with 4 years of experience in the software
        industry
      </Text>
      <Flex direction="column" gapY="6" className="w-full overflow-x-hidden">
        {map(experiences || [], (experience: any, index: number) => {
          return (
            <Flex
              key={`experience-${experience?.id}-${index}`}
              direction="column"
              gapY="2"
            >
              <Flex align="center" gapX="4">
                <Avatar
                  fallback={"NLV"}
                  src={experience?.icon?.external?.url}
                  className="hidden md:visible"
                />
                <Text weight="bold">
                  {experience?.properties?.role?.select?.name}
                </Text>
              </Flex>
              <Flex gapX="3">
                {map(experience?.properties?.type?.multi_select, (type) => (
                  <Button size="1" radius="full" color={type.color}>
                    <span className="capitalize">{type.name}</span>
                  </Button>
                ))}
              </Flex>
              <Flex gapX="2">
                <Text weight="medium">
                  {experience?.properties?.name?.title?.[0]?.plain_text}
                </Text>
                <Text>@</Text>
                <Text className="text-gray-500">
                  {moment(experience?.properties?.from?.date?.start).format(
                    "YYYY"
                  )}
                </Text>
                <Text className="text-gray-500">-</Text>
                <Text className="text-gray-500">
                  {experience?.properties?.from?.date?.end
                    ? moment(experience?.properties?.from?.date?.end).format(
                        "YYYY"
                      )
                    : "Running"}
                </Text>
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
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Experience;
