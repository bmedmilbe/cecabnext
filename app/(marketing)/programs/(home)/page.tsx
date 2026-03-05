import { AssociationsListAction } from "@/app/actions/associations";
import { SpotsListAction } from "@/app/actions/programs";
import AssociationCardsInfinity from "@/app/components/infinities/AssociationCardsInfinity";
import ProgramsCardInfinity from "@/app/components/infinities/ProgramsCardInfinity";
export const revalidate = 300;
const ProgramsPage = async () => {
  const programs = await SpotsListAction();
  return (
    <ProgramsCardInfinity
      initialData={[...(programs.data?.results || [])]}
      nextPage={programs.data?.next || null}
    />
  );
};

export default ProgramsPage;
