import React from "react";
import SidebarHeaderDashboard from "./SideBarHeaderDashboard";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/shared-components/common/sidebar";
import SideBarListDashboard from "./SideBarList";
import { sidebarItems } from "./nav-config";

const DashboardSideBar = () => {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="bg-bankdash-background  border-e-bankdash-backgroundside border-e  h-screen"
    >
      <SidebarHeader className="min-h-28 p-0">
        <SidebarHeaderDashboard />
      </SidebarHeader>
      <SidebarContent>
        <SideBarListDashboard items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default DashboardSideBar;
