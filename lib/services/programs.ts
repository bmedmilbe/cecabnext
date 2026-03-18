import { SpotType } from "./bands";
import { GeneralList, GetGeneral } from "./generals";

export const ListSpots = async (nextPage: string | null = null) =>
  await GeneralList<SpotType>("/cms/videos?is_spot=true", nextPage);

export const GetSpot = async (slug: string) =>
  await GetGeneral<SpotType>(`/cms/videos/${slug}/`);
