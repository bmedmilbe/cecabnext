import { PostAction, PostListAction } from "@/app/actions/posts";
import BlogCardsInfinity from "@/app/components/infinities/BlogCardsInfinity";

const BlogsPage = async () => {
  const postsi = await PostListAction();
  return (
    <BlogCardsInfinity
      postsi={[...(postsi.data?.results || [])]}
      nextPage={postsi.data?.next || null}
    />
  );
};

export default BlogsPage;
