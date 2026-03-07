import { Post, PostListAction } from "../../lib/services/posts";
import BlogSideCard from "./BlogSideCard";
interface Props {
  post: Post;
}
const BlogSideBar = async ({ post }: Props) => {
  const response = await PostListAction();
  return (
    <>
      <aside className="widget-area pt-3" id="secondary">
        <div className="widget widget_zash_posts_thumb">
          <h3 className="widget-title">Outras Actividades</h3>

          {response.data?.results
            ?.filter((c) => c.id != post.id)
            ?.map((targetPost) => (
              <BlogSideCard post={targetPost} key={targetPost.id} />
            ))}
        </div>
      </aside>
    </>
  );
};

export default BlogSideBar;
