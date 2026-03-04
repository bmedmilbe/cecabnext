import { TeamListAction } from "@/app/actions/teams";
import TeamDisplay from "@/app/components/TeamDisplay";

const TeamPage = async () => {
  const team = await TeamListAction();
  return <TeamDisplay initialData={[...(team.data?.results || [])]} />;
};

export default TeamPage;
