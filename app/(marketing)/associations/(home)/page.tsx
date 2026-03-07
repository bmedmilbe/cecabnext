import { ListAssociations } from "@/lib/services/associations";
import AssociationCardsInfinity from "@/app/components/infinities/AssociationCardsInfinity";
export const revalidate = 300;
const AssossiationsPage = async () => {
  const associations = await ListAssociations();
  return (
    <AssociationCardsInfinity
      associations={[...(associations.data?.results || [])]}
      nextPage={associations.data?.next || null}
    />
  );
};

export default AssossiationsPage;
