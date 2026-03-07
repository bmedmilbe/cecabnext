import { ListTeam } from "@/lib/services/teams";
import TeamDisplay from "@/app/components/TeamDisplay";
export const revalidate = 300;
const TeamPage = async () => {
  const team = await ListTeam();
  return <TeamDisplay initialData={[...(team.data?.results || [])]} />;
};

export default TeamPage;
