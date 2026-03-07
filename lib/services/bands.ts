import { GeneralList, GetGeneral } from "./generals";

export type SpotType = {
  id: number;
  title: string;
  created_at: string;
  link: string;
  picture: string;
};
export const ListBands = async (nextPage: string | null = null) =>
  await GeneralList<SpotType>("/cecab/bands/", nextPage);

export const GetBand = async (slug: string) =>
  await GetGeneral<SpotType>(`/cecab/bands/${slug}/`);
