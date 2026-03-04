import JoinNow from "@/app/components/JoinNow";
import PageHeader from "@/app/components/PageHeader";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const TeamPageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader title="Corpo Directivo" image="images/about/cacau14.jpg" />
      <div className="team-area pt-100 pb-70">
        <div className="container">{children}</div>
      </div>
      <div className="gray-bg">
        <JoinNow />
      </div>
    </>
  );
};

export default TeamPageLayout;
