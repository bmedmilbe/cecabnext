import { GetPost, ListPosts } from "@/lib/services/posts";
import BlogCardsInfinity from "@/app/components/infinities/BlogCardsInfinity";

const BlogsPage = async () => {
  const postsi = await ListPosts();
  return (
    <BlogCardsInfinity
      postsi={[...(postsi.data?.results || [])]}
      nextPage={postsi.data?.next || null}
    />
  );
};

export default BlogsPage;
