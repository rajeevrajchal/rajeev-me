import { notion } from "@/libs/notion";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export async function getAboutInfo() {
  "use server";
  try {
    const data: any = await notion.pages.retrieve({
      page_id: process.env.NEXT_PUBLIC_NOTION_DB_ABOUT!,
    });
    return {
      data: data?.properties,
    };
  } catch (error) {
    notFound();
  }
}

const Headline = async () => {
  const about = await getAboutInfo();

  return (
    <Flex direction="column" gapY="2">
      <Heading as="h6">Rajeev Rajchal</Heading>
      <Heading as="h6">Software Developer</Heading>
      <Flex
        align={{
          sm: "start",
          md: "center",
        }}
        gapX="4"
        gapY="1"
        className="flex-col md:flex-row"
      >
        <Flex align="center" gapX="2">
          <FiBriefcase size={20} />
          <Text as="p" size="2" className="capitalize">
            {about?.data?.work_status?.select?.name}
          </Text>
        </Flex>
        <Flex align="center" gapX="2">
          <FaLocationDot size={18} />
          <Text as="p" size="2">
            {about?.data?.location?.rich_text?.[0]?.plain_text}
          </Text>
        </Flex>
        <Flex align="center" gapX="2">
          <MdEmail size={20} />
          <Text as="p" size="2">
            {about?.data?.email?.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Headline;
