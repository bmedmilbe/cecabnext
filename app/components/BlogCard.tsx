import { BiTimeFive } from "react-icons/bi";
import { PostType } from "../../lib/services/posts";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  post: PostType;
}
const BlogCard = ({ post }: Props) => {
  const navigate = useRouter();
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div
            className="post-image"
            onClick={() => navigate.push(`/blogs/${post.slug}`)}
          >
            <img src={`${post.picture}`} alt={post.title} />

            <div className="date">
              {/* <i className="flaticon-calendar"></i> */}
              <BiTimeFive /> {` `}
              {post.posted_at}
            </div>
          </div>

          <div className="post-content">
            <h3 onClick={() => navigate.push(`/blogs/${post.slug}`)}>
              {/* <Link href={`/blogs/${post.slug}`}> */}
              {post.title}
              {/* </Link> */}
            </h3>
            <p>{post.beginnig.substring(0, 90)}...</p>

            {/* <Link href={`/blogs/${post.slug}`}> */}
            <Link className="default-btn" href={`/blogs/${post.slug}`}>
              Vizualizar <span></span>
            </Link>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
