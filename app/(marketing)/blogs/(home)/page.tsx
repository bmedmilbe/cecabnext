import { PostAction, PostListAction } from "@/app/actions/posts";
import BlogCardsInfinity from "@/app/components/infinities/BlogCardsInfinity";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  const post = await PostAction(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.data?.title,
    description: post.data?.beginnig,
    openGraph: {
      images: [post.data?.image || "", ...previousImages],
    },
  };
}
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
