"use server";

import apiRequest from "@/lib/api-client";
import { ActionAPIResponseList, PaginatedResult } from "./global";

export async function GeneralListAction<T>(
  endpoint: string,
  nextPage: string | null,
): Promise<ActionAPIResponseList<T>> {
  try {
    const results = await apiRequest<PaginatedResult<T>>(
      nextPage
        ? `${nextPage.includes("?") ? endpoint + "?" + nextPage.split("?")[1] : endpoint}`
        : endpoint,
    );

    return {
      success: true,
      message: "Pathner fetched successfully",
      data: results.data,
    };
  } catch (error: any) {
    console.error("Pathner fetching error", error);

    return {
      success: false,
      message: "Failed to fetch pathners",
      error: error.message || "Internal Server Error",
    };
  }
}
