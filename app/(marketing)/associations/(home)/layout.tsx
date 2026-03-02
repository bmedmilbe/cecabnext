import PageHeader from "@/app/components/PageHeader";
import YearGolsLoader from "@/app/components/YearGolsLoader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const AssossiationsPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader title="Associações" image="images/about/cacau13.JPG" />

      <div className="container mt-4">{children}</div>
      <div className="section-bg-white">
        <YearGolsLoader />
      </div>
    </>
  );
};

export default AssossiationsPageLayout;
