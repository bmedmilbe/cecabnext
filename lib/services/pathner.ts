import { GeneralList } from "./generals";

export type PathenerType = {
  id: number;
  title: string;
  picture: string;
};
export const ListPathners = async () =>
  await GeneralList<PathenerType>("/cms/partners");
