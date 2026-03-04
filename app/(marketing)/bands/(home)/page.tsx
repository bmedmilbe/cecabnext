import { BandsListAction } from "@/app/actions/bands";
import ProgramsCardInfinity from "@/app/components/infinities/ProgramsCardInfinity";

const BandsPage = async () => {
  const bands = await BandsListAction();
  return (
    <ProgramsCardInfinity
      initialData={[...(bands.data?.results || [])]}
      nextPage={bands.data?.next || null}
    />
  );
};

export default BandsPage;
