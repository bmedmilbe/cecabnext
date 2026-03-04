"use server";

import { GeneralListAction, GetGeneralAction } from "./generals";

export type Spot = {
  id: number;
  title: string;
  created_at: string;
  link: string;
  picture: string;
};
export const BandsListAction = async (nextPage: string | null = null) =>
  await GeneralListAction<Spot>("/cecab/bands/", nextPage);

export const BandAction = async (slug: string) =>
  await GetGeneralAction<Spot>(`/cecab/bands/${slug}/`);
