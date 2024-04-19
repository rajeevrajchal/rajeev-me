import { notion } from "@/libs/notion";
import { notFound } from "next/navigation";

export async function getProjects() {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DB_PORTFOLIO!,
      in_trash: false,
    });
    return {
      data: data?.results,
    };
  } catch (error) {
    notFound();
  }
}
