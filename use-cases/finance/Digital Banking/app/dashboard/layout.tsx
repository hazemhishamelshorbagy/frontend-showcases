import { DashboardHeader, DashboardFooter } from "@/components/layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardHeader />
      <div>{children}</div>
      <DashboardFooter />
    </>
  );
};
export default layout;
