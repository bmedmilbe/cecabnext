import { ListPosts } from "../../lib/services/posts";

const HomePosts = async () => {
  const posts = await ListPosts();
  return (
    <ul>
      {posts?.data?.results?.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
};

export default HomePosts;
