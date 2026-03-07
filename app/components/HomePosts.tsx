import { PostListAction } from "../../lib/services/posts";

const HomePosts = async () => {
  const posts = await PostListAction();
  return (
    <ul>
      {posts?.data?.results?.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
};

export default HomePosts;
