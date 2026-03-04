"use server";

import apiRequest from "@/lib/api-client";
import { ActionFormResponse, ActionResponse } from "./global";

export default async function messageAction(
  initialState: ActionResponse,
  form: FormData,
): Promise<ActionFormResponse> {
  // subject, email, text, name
  const data = {
    name: form.get("name") as string,
    subject: form.get("subject") as string,
    text: form.get("text") as string,
    email: form.get("email") as string,
  };
  try {
    const response = await apiRequest("/cecab/messages/", {
      body: JSON.stringify(data),
      method: "POST",
    });

    if (!response.success) {
      return { ...response, input: data };
    } else {
      return {
        success: true,
        message: "Message Sent",
        input: { name: "", subject: "", text: "", email: "" },
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Message Not Sent",
      error: "Unexpected Error",
      input: data,
    };
  }
}
