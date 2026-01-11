import React from "react";
import SidebarHeaderDashboard from "./SideBarHeaderDashboard";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/shared-components/common/sidebar";

const DashboardSideBar = () => {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="bg-bankdash-background  border-e-bankdash-backgroundside border-e  h-screen"
    >
      <SidebarContent>test heellelle</SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default DashboardSideBar;
