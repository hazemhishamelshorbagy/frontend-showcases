import { SidebarTrigger } from "@/shared-components/common/sidebar";
import React from "react";
import { Text } from "@/shared-components/common/TextVariant";
const DashboardHeader = () => {
  return (
    <>
      <header className="flex h-20 items-center justify-between lg:px-8 px-4 bg-white border-b border-bankdash-backgroundside">
        <div className="flex w-full items-center lg:justify-start justify-between gap-4">
          <div className="lg:hidden">
            <SidebarTrigger />
          </div>
          <Text variant="h1" weight="semibold" className="text-bank-gradiant">
            Overview
          </Text>
          <div className="flex items-center gap-6">
            {/* مكونات أخرى مثل البحث والجرس */}
            {/* <UserProfileMenu /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
