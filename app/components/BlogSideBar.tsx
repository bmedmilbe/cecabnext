import { PostType, ListPosts } from "../../lib/services/posts";
import BlogSideCard from "./BlogSideCard";
interface Props {
  post: PostType;
}
const BlogSideBar = async ({ post }: Props) => {
  const response = await ListPosts();
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
