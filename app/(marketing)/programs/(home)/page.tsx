import { ListAssociations } from "@/lib/services/associations";
import { ListSpots } from "@/lib/services/programs";
import AssociationCardsInfinity from "@/app/components/infinities/AssociationCardsInfinity";
import ProgramsCardInfinity from "@/app/components/infinities/ProgramsCardInfinity";
export const revalidate = 300;
const ProgramsPage = async () => {
  const programs = await ListSpots();
  return (
    <ProgramsCardInfinity
      initialData={[...(programs.data?.results || [])]}
      nextPage={programs.data?.next || null}
    />
  );
};

export default ProgramsPage;
