import { sliderData } from "../../data/data";
import { ListPosts } from "../../../lib/services/posts";
import Banner from "../Banner";

const BannerDataLoader = async () => {
  const posts = await ListPosts();

  return (
    <>
      <Banner slides={[...(posts.data?.results || []), ...sliderData]} />
    </>
  );
};

export default BannerDataLoader;
