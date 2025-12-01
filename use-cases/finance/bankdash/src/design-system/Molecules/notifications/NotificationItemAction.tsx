"use client";

import React from "react";
import { NotificationSingleItem } from "@/interfaces/Notifications";
import { getActionUrl } from "@/utils/getActionUrl";
import { Button } from "@/design-system/Atoms/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NotificationItemAction = ({
  priority,
  status,
  action,
  actionUrl,
  type,
}: NotificationSingleItem) => {
  const router = useRouter();
  return (
    <div className="mt-1 flex gap-1 w-full justify-end text-capitalize">
      {action === "review" && (
        <>
          <Button
            className="mt-2 cursor-pointer  bg-success hover:bg-success hover:opacity-90  rounded-3xl"
            variant={"destructive"}
            size={"sm"}
            onClick={() => {
              const url = getActionUrl(actionUrl, action, status);
              if (url) router.push(url);
            }}
          >
            {action}
          </Button>
          <Link
            className="mt-2 rounded-3xl  font-normal px-4 py-1 bg-raw-red hover:opacity-90  text-white text-sm flex items-center justify-center"
            href={"/report-fraud"}
          >
            Report Fraud
          </Link>
        </>
      )}
      {action === "verify" && (
        <>
          <Button
            className="mt-2 cursor-pointer rounded-3xl"
            variant={"outline"}
            size={"sm"}
            onClick={() => {
              const url = getActionUrl(actionUrl, action, status);
              if (url) router.push(url);
            }}
          >
            {action}
          </Button>
        </>
      )}
    </div>
  );
};

export default NotificationItemAction;
