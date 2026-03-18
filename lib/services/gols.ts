import { GeneralList } from "./generals";

export type YearGolType = {
  id: number;
  year: number;
  associations: number;
  agricultors: number;
  products: number;
};

export const ListGoals = async (nextPage: string | null = null) =>
  await GeneralList<YearGolType>("/cms/year-goals", nextPage);
