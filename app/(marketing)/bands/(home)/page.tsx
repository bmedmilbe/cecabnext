import { BandsListAction } from "@/app/actions/bands";
import ProgramsCardInfinity from "@/app/components/infinities/ProgramsCardInfinity";
export const revalidate = 300;
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
