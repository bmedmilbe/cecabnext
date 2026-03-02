"use server";
import { GeneralListAction } from "./generals";

export interface YearGol {
  id: number;
  year: number;
  associations: number;
  agricultors: number;
  products: number;
}

export const GolListAction = async () =>
  await GeneralListAction<YearGol>("/cecab/yeargols/");
