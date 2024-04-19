/* eslint-disable @next/next/no-img-element */
import { Button, DataList, Flex, Text } from "@radix-ui/themes";
import { IoCloudDownloadOutline } from "react-icons/io5";

const description = `Hey there! I'm a software developer with four years of experience, eager to learn and adopt new technologies. I specialize in frontend development with React, JavaScript, and Next.js, as well as backend development with Nest and Express. Whether it's crafting beautiful interfaces, building robust backend systems, or learning the latest tech trends, I'm all in. Let's collaborate and create some incredible online experiences together`;

export default function Home() {
  return (
    <Flex direction="column" gapY="8" width="100%">
      <Flex gapX="8" gapY="4" className="flex-col md:flex-row">
        <Flex className="w-full">
          <div className="h-[34vh] w-full md:w-[300px] rounded-xl">
            <img
              src="./rajeev.jpg"
              alt="Rajeev Rajchal"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </Flex>
        <Flex direction="column" gapY="4">
          <Text className="text-justify">{description}</Text>
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Education</DataList.Label>
              <DataList.Value>
                <ul>
                  <li>
                    Bachelor In Computer Science and Information Technology
                  </li>
                  <li> Tribhuvan University, Nepal @ 2020</li>
                </ul>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Skill</DataList.Label>
              <DataList.Value>
                <ul className="flex items-center gap-2">
                  <li>Javascript,</li>
                  <li>Typescript,</li>
                  <li>React</li>
                </ul>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
          <div className="w-fit">
            <Button radius="full" className="w-fit">
              <IoCloudDownloadOutline size={22} />
              <span>Get Resume</span>
            </Button>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
