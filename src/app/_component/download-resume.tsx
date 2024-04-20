import { Button } from "@radix-ui/themes";
import { IoCloudDownloadOutline } from "react-icons/io5";

import { notion } from "@/libs/notion";
import { notFound } from "next/navigation";

export async function getResume() {
  "use server";
  try {
    const data: any = await notion.pages.retrieve({
      page_id: process.env.NEXT_PUBLIC_NOTION_DB_RESUME!,
    });
    return {
      data: data?.properties?.resume?.files,
    };
  } catch (error) {
    notFound();
  }
}

const DownloadResume = async () => {
  const resume = await getResume();

  return (
    <div className="w-fit">
      <Button radius="full" className="w-fit" asChild={true} variant="soft">
        <a href={resume?.data?.[0]?.file?.url} download target="_blank">
          <IoCloudDownloadOutline size={22} />
          <span>Get Resume</span>
        </a>
      </Button>
    </div>
  );
};

export default DownloadResume;
