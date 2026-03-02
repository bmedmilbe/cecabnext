"use server";

import { GeneralListAction } from "./generals";
interface Role {
  id: number;
  title: string;
}
export interface Team {
  id: number;
  name: string;
  picture: string;
  role: Role;
}
export const TeamListAction = async () =>
  await GeneralListAction<Team>("/cecab/teams/", null);
