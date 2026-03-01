"use server";

import apiRequest from "@/lib/api-client";
import { ActionAPIResponseList, PaginatedResult } from "./global";

export type Post = {
  id: number;
  title: string;
};

const PostListAction = async (): Promise<ActionAPIResponseList<Post>> => {
  try {
    // 1. Fetch the raw paginated data from your backend
    const results = await apiRequest<PaginatedResult<Post>>("/cecab/posts/");

    // 2. Wrap it in your ActionResponse structure
    return {
      success: true,
      message: "Posts fetched successfully",
      data: results.data,
    };
  } catch (error: any) {
    console.error("Posts fetching error", error);

    // 3. Return the failure state
    return {
      success: false,
      message: "Failed to fetch posts",
      error: error.message || "Internal Server Error",
    };
  }
};

export default PostListAction;
