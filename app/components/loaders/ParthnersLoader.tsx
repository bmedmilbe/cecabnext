import { PathnerAction } from "../../actions/pathner";
import Partners from "../Partners";

const ParthnersLoader = async () => {
  const pathners = await PathnerAction();

  return (
    <>
      <Partners pathners={[...(pathners.data?.results || [])]} />
    </>
  );
};

export default ParthnersLoader;
