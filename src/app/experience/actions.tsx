import { notion } from "@/libs/notion";
import { orderBy } from "lodash";
import { notFound } from "next/navigation";

export async function getExperience() {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DB_EXPERIENCE!,
      in_trash: false,
    });
    return {
      data:
        orderBy(
          data?.results,
          [
            (experience: any) => {
              const startDate = experience?.properties?.from?.date?.start;
              return startDate || 0;
            },
          ],
          ["desc"]
        ) || [],
    };
  } catch (error) {
    notFound();
  }
}
