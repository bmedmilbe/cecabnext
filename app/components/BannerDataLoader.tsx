import { sliderData } from "./../data/data";
import { PostListAction } from "../actions/posts";
import Banner from "./Banner";

const BannerDataLoader = async () => {
  const posts = await PostListAction();

  return (
    <>
      <Banner slides={[...(posts.data?.results || []), ...sliderData]} />
    </>
  );
};

export default BannerDataLoader;
