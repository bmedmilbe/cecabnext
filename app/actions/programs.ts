"use server";

import { GeneralListAction, GetGeneralAction } from "./generals";

export type Spot = {
  id: number;
  title: string;
  created_at: string;
  link: string;
  picture: string;
};
export const SpotsListAction = async (nextPage: string | null = null) =>
  await GeneralListAction<Spot>("/cecab/spots/", nextPage);

export const SpotAction = async (slug: string) =>
  await GetGeneralAction<Spot>(`/cecab/spots/${slug}/`);
