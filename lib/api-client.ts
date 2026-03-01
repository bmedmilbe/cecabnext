"use server";

import { ActionAPIResponse } from "@/app/actions/global";

const apiRequest = async <T>(
  endpoint: string,
  params: RequestInit = {},
): Promise<ActionAPIResponse<T>> => {
  try {
    const url = `${process.env.API_BASE_URL || "http://localhost:8000"}${endpoint}`;

    const response = await fetch(url, { ...params });

    const playload = await response.json().catch(() => null);

    if (!response.ok) {
      const hasFieldError =
        playload && typeof playload === "object" && !playload.detail;

      return {
        status: playload.status,
        success: false,
        message:
          playload.detail ||
          (hasFieldError ? "Validation Error" : "Request Error"),

        errors: hasFieldError ? playload : undefined,
        error:
          playload.detail ||
          (hasFieldError ? "Validation Error" : "Request Error"),
      };
    }
    return {
      data: playload as T,
      status: playload.status,
      success: true,
      message: "Success",
    };
  } catch (error) {
    return {
      data: {} as T,
      success: true,
      message: "Networking Error",
    };
  }
};

export default apiRequest;
