import ParthnersLoader from "@/app/components/loaders/ParthnersLoader";
import PageHeader from "@/app/components/PageHeader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const ProductionsPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader title="Produções" image="images/about/cacau11.jpg" />

      <div className="container mt-4">{children}</div>
      <div className="section-bg-white">
        <ParthnersLoader />
      </div>
    </>
  );
};

export default ProductionsPageLayout;
