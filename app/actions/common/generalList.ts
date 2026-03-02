"use server";

import apiRequest from "@/lib/api-client";
import { ActionAPIResponseList, PaginatedResult } from "./global";

export type Post = {
  id: number;
  title: string;
  image: string;
  picture: string;
  info: string;
  beginnig: string;
  slug: string;
  text: string;
  posted_at: string;
  date: string;
};

const GeneralListAction = async <T>(
  apiEndpoint: string,
): Promise<ActionAPIResponseList<T>> => {
  try {
    const results = await apiRequest<PaginatedResult<T>>(apiEndpoint);

    return {
      success: true,
      message: "Posts fetched successfully",
      data: results.data,
    };
  } catch (error: any) {
    console.error("Posts fetching error", error);

    return {
      success: false,
      message: "Failed to fetch posts",
      error: error.message || "Internal Server Error",
    };
  }
};

export default GeneralListAction;
