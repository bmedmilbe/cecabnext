import Medias from "@/app/components/Medias";
import PageHeader from "@/app/components/PageHeader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const AddressPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader title={"Contactos"} image={"images/about/cacau11.jpg"} />
      {children}
    </>
  );
};

export default AddressPageLayout;
