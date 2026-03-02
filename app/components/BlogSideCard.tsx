import Link from "next/link";
import type { PostHome } from "../../hooks/common/usePostsHome";
interface Props {
  post: PostHome;
}
const BlogSideCard = ({ post }: Props) => {
  return (
    <>
      <article className="item">
        <Link href={`/blogs/${post.slug}`}>
          <a className="thumb" href={`/blogs/${post.slug}`}>
            <span
              className="fullimage cover"
              style={{ backgroundImage: `url(${post.picture})` }}
              role="img"
            ></span>
          </a>
        </Link>

        <div className="info">
          <time>{post.posted_at}</time>
          <h4 className="title usmall">
            <a href={`/blogs/${post.slug}`}>{post.title}</a>
          </h4>
        </div>

        <div className="clear"></div>
      </article>
    </>
  );
};

export default BlogSideCard;
