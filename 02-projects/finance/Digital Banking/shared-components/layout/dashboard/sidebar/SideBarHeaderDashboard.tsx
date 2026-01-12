import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "@/public/images/assets";
const SidebarHeaderDashboard = () => {
  return (
    <div className=" flex items-center  h-20  justify-center">
      <Link href={"/dashboard"}>
        <Image src={logo} alt="BankDash Logo" width={183} height={63} />
      </Link>
    </div>
  );
};

export default SidebarHeaderDashboard;
