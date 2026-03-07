import { SpotType } from "./bands";
import { GeneralList, GetGeneral } from "./generals";

export const ListSpots = async (nextPage: string | null = null) =>
  await GeneralList<SpotType>("/cecab/spots/", nextPage);

export const GetSpot = async (slug: string) =>
  await GetGeneral<SpotType>(`/cecab/spots/${slug}/`);
