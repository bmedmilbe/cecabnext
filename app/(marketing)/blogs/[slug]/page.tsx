import { GetPost } from "@/lib/services/posts";
import BlogSideBar from "@/app/components/BlogSideBar";
import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
export const revalidate = 300;
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  const post = await GetPost(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.data?.title,
    description: post.data?.beginnig,
    openGraph: {
      images: [post.data?.image || "", ...previousImages],
    },
  };
}
const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { data: post } = await GetPost(slug);

  if (!post) {
    return (
      <div className="container py-5">
        <h2 className="text-center">Post not found.</h2>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={post.title || ""}
        image={post.picture ? `${post.picture}` : ""}
        other={[{ title: "Actividades e Realizações", link: "/blogs" }]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-content">
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: post.text || "" }}
                ></div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Publicado</span> {post.posted_at}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="article-footer">
                <div className="article-share">
                  <ul className="social">
                    <li>
                      <span>Partilha:</span>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <Link
                      href={post.prev ? `/blogs/${post.prev}` : "#"}
                      className={post.prev ? "" : "disabled-link"}
                    >
                      <i className="flaticon-left-chevron"></i> Actividade
                      Anterior
                    </Link>
                  </div>

                  <div className="nav-next">
                    <Link
                      href={post.next ? `/blogs/${post.next}` : "#"}
                      className={post.next ? "" : "disabled-link"}
                    >
                      Actividade Seguinte{" "}
                      <i className="flaticon-right-chevron"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <BlogSideBar post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
