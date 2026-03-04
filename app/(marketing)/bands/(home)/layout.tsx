import YearGolsLoader from "@/app/components/loaders/YearGolsLoader";
import Medias from "@/app/components/Medias";
import PageHeader from "@/app/components/PageHeader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const BandsPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader title="Nossa Banda" image="images/medias/band2.jpg" />{" "}
      <div className="container mt-4">{children}</div>
      <div className="section-bg-white">
        <Medias />
      </div>
    </>
  );
};

export default BandsPageLayout;
