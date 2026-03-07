import { GeneralList } from "./generals";
type RoleType = {
  id: number;
  title: string;
};
export type TeamType = {
  id: number;
  name: string;
  picture: string;
  role: RoleType;
};
export const ListTeam = async () =>
  await GeneralList<TeamType>("/cecab/teams/", null);
