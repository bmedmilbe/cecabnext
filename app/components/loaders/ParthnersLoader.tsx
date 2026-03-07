import { ListPathners } from "../../../lib/services/pathner";
import Partners from "../Partners";

const ParthnersLoader = async () => {
  const pathners = await ListPathners();

  return (
    <>
      <Partners pathners={[...(pathners.data?.results || [])]} />
    </>
  );
};

export default ParthnersLoader;
