"use server";

import { notion } from "@/libs/notion";
import { notFound } from "next/navigation";

export async function getPortfolio() {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DB_PORTFOLIO!,
    });
    return data;
  } catch (error) {
    notFound();
  }
}
