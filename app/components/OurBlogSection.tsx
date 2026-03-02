"use client";

import { Post } from "../actions/posts";
import BlogCardsInfinity from "./infinities/BlogCardsInfinity";

interface Props {
  postsi: Post[];
  nextPage: string | null;
}

const OurBlogSection = ({ postsi, nextPage }: Props) => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Blog CECAB</span>
          <h2>Notícias e Realizações</h2>
        </div>

        <BlogCardsInfinity postsi={postsi} nextPage={nextPage} />
      </div>
    </section>
  );
};

export default OurBlogSection;
