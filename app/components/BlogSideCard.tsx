import Link from "next/link";
import { Post } from "../actions/posts";
interface Props {
  post: Post;
}
const BlogSideCard = ({ post }: Props) => {
  return (
    <>
      <article className="item">
        <Link href={`/blogs/${post.slug}`}>
          <span className="thumb">
            <span
              className="fullimage cover"
              style={{ backgroundImage: `url(${post.picture})` }}
              role="img"
            ></span>
          </span>
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
