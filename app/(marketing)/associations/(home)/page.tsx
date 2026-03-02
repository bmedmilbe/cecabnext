import { AssociationsListAction } from "@/app/actions/associations";
import { PostListAction } from "@/app/actions/posts";
import AssociationCardsInfinity from "@/app/components/AssociationCardsInfinity";
import BlogCardsInfinity from "@/app/components/BlogCardsInfinity";

const AssossiationsPage = async () => {
  const associations = await AssociationsListAction();
  return (
    <AssociationCardsInfinity
      associations={[...(associations.data?.results || [])]}
      nextPage={associations.data?.next || null}
    />
  );
};

export default AssossiationsPage;
