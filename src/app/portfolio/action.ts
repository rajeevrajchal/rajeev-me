"use server";

import { notion } from "@/libs/notion";
import { notFound } from "next/navigation";

export async function getPortfolio() {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DB_PORTFOLIO!,
    });
    const blocks = await notion.blocks.retrieve({
      block_id: "907afd1a-2936-4134-b9ae-18cc6509a41b",
    });
    console.log("blocks", blocks);
    return {
      data,
      blocks,
    };
  } catch (error) {
    notFound();
  }
}
