import { GeneralList, GetGeneral } from "./generals";

export type AssociationType = {
  id: number;
  name: string;
  registered: string;
  address: string;
  number_of_associated: number;
  picture: string;
  images: [];
  district_name: string;
};
export const ListAssociations = async (nextPage: string | null = null) =>
  await GeneralList<AssociationType>("/cms/associations", nextPage);

export const GetAssociation = async (slug: string) =>
  await GetGeneral<AssociationType>(`/cms/associations/${slug}/`);
