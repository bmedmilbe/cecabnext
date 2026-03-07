import { PostType, ListPosts } from "../../lib/services/posts";
import BlogCard from "./BlogCard";
interface prop {
  currentNextPage: string | null;
  ref: (node?: Element | null | undefined) => void;
  data: PostType[];
}
const Book = async ({ currentNextPage, ref, data }: prop) => {
  const moreDataFetched = await ListPosts(currentNextPage);
  //   const [oldData, setOldData] = useState(data);

  // return {
  //   data: moreDataFetched.data?.results || [],
  //   next: moreDataFetched.data?.next || null,
  // };
  return (
    <>
      <div className="row justify-content-center">
        {moreDataFetched.data?.results.map((page, index) => (
          <BlogCard key={index} post={page} />
        ))}
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12">
          <span
            className="other-link"
            ref={moreDataFetched.data?.next ? ref : null}
          >
            {"Ver mais"}
          </span>
        </div>
      </div>
    </>
  );
};
export default Book;
