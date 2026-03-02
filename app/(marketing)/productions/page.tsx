import { GolListAction } from "@/app/actions/gols";
import YearGoalCardInfinity from "@/app/components/infinities/YearGoalCardInfinity";
import Link from "next/link";

const ProductionsPage = async () => {
  const goals = await GolListAction();
  return (
    <div className="row mt-4">
      <YearGoalCardInfinity
        postsi={[...(goals.data?.results || [])]}
        nextPage={goals.data?.next || null}
      />
    </div>
  );
};

export default ProductionsPage;
