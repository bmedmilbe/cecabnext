import YearGolsLoader from "@/app/components/loaders/YearGolsLoader";
import Medias from "@/app/components/Medias";
import PageHeader from "@/app/components/PageHeader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const ProgramsPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader title="Nossos Trabalhos" image="images/about/cacau15.jpg" />
      <div className="container mt-4">{children}</div>
      <div className="section-bg-white">
        <Medias />
      </div>
    </>
  );
};

export default ProgramsPageLayout;
