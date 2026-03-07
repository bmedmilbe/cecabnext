import { GeneralListAction } from "./generals";

export interface Pathener {
  id: number;
  title: string;
  picture: string;
}
export const PathnerAction = async () =>
  await GeneralListAction<Pathener>("/cecab/pathners/");
