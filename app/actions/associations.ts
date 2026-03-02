"use server";

import { GeneralListAction, GetGeneralAction } from "./generals";

export type Association = {
  id: number;
  name: string;
  registered: string;
  address: string;
  number_of_associated: number;
  picture: string;
  images: [];
  district_name: string;
};
export const AssociationsListAction = async (nextPage: string | null = null) =>
  await GeneralListAction<Association>("/cecab/associations/", nextPage);

export const AssociationAction = async (slug: string) =>
  await GetGeneralAction<Association>(`/cecab/associations/${slug}/`);
