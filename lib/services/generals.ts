import apiRequest from "@/lib/api-client";
import {
  ActionAPIResponse,
  ActionAPIResponseList,
  PaginatedResult,
} from "./global";

export async function GeneralListAction<T>(
  endpoint: string,
  nextPage: string | null = null,
): Promise<ActionAPIResponseList<T>> {
  try {
    const results = await apiRequest<PaginatedResult<T>>(
      nextPage
        ? `${nextPage.includes("?") ? endpoint + "?" + nextPage.split("?")[1] : endpoint}`
        : endpoint,
    );

    return {
      success: true,
      message: "Fetched successfully " + endpoint,
      data: results.data,
    };
  } catch (error: any) {
    console.error("Fetching error " + endpoint, error);

    return {
      success: false,
      message: "Failed to fetch pathners " + endpoint,
      error: error.message || "Internal Server Error",
    };
  }
}

export async function GetGeneralAction<T>(
  endpoint: string,
): Promise<ActionAPIResponse<T>> {
  try {
    const results = await apiRequest<T>(endpoint);

    return {
      success: true,
      message: "Fetched successfully " + endpoint,
      data: results.data,
    };
  } catch (error: any) {
    console.error("Fetching error  " + endpoint, error);

    return {
      success: false,
      message: "Failed to fetch " + endpoint,
      error: error.message || "Internal Server Error",
    };
  }
}
