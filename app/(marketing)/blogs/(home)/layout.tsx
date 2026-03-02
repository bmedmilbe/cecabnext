import JoinNow from "@/app/components/JoinNow";
import PageHeader from "@/app/components/PageHeader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const BlogPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader
        title="Actividades e Realizações"
        image="images/about/cacau6.jpg"
      />
      <div className="container mt-4">{children}</div>
      <div className="section-bg-white">
        <JoinNow />
      </div>
    </>
  );
};

export default BlogPageLayout;
