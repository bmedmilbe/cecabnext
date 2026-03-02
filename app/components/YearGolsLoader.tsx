import { GolListAction } from "../actions/gols";
import YearGols from "./YearGols";

const YearGolsLoader = async () => {
  const goals = await GolListAction();

  return (
    <>
      <YearGols goals={[...(goals.data?.results || [])]} />
    </>
  );
};

export default YearGolsLoader;
