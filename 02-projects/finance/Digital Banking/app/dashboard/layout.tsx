import {
  SidebarProvider,
  SidebarTrigger,
} from "@/shared-components/common/sidebar";
import {
  DashboardHeader,
  DashboardFooter,
  DashboardSideBar,
} from "@/shared-components/layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSideBar />

      <div className="flex flex-col grow ">
        <DashboardHeader />
        <main className="bg-bankdash-backgroundside lg:px-8 px-4">
          {children}
        </main>
      </div>
      {/* <DashboardFooter /> */}
    </SidebarProvider>
  );
};
export default layout;
