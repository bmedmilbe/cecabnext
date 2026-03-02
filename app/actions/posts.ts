"use server";

import { GeneralListAction } from "./generals";

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
export const PostListAction = async (nextPage: string | null = null) =>
  await GeneralListAction<Post>("/cecab/posts/", nextPage);
