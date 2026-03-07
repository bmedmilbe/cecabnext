import { ListGoals } from "../../../lib/services/gols";
import YearGols from "./../YearGols";

const YearGolsLoader = async () => {
  const goals = await ListGoals();

  return (
    <>
      <YearGols goals={[...(goals.data?.results || [])]} />
    </>
  );
};

export default YearGolsLoader;
