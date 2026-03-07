import { GeneralList, GetGeneral } from "./generals";

export type PostType = {
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
  prev: string;
  next: string;
};
export const ListPosts = async (nextPage: string | null = null) =>
  await GeneralList<PostType>("/cecab/posts/", nextPage);

export const GetPost = async (slug: string) =>
  await GetGeneral<PostType>(`/cecab/posts/${slug}/`);
