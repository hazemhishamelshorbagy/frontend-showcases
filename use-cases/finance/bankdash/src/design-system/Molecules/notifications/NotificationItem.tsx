import React from "react";
import { DropdownMenuItem } from "../DropdownMenu";
import { Text } from "@/design-system/Atoms/Text";
import { NotificationSingleItem } from "@/interfaces/Notifications";
import { Icon } from "@/design-system/Atoms/Icons";
import { Timestamp } from "@/design-system/Atoms/Timestamp";
import { PriorityPill } from "./PriorityPill";
import clsx from "clsx";
import { getActionUrl } from "@/utils/getActionUrl";
import Link from "next/link";
import NotificationItemAction from "./NotificationItemAction";
import { cn } from "@/lib/utils";

const NotificationItem = ({
  id,
  message,
  status,
  timestamp,
  title,
  type,
  accountId,
  action,
  actionUrl,
  category,
  priority,
}: NotificationSingleItem) => {
  return (
    <DropdownMenuItem
      key={id}
      className={clsx(
        status === "unread" && "bg-blue-50 font-semibold",
        "p-3 flex flex-col  hover:bg-blue-100 focus:bg-blue-100 hover:text-primary transition-all"
      )}
    >
      <div className="flex justify-between shrink-0 w-full items-start">
        <div className="icon flex items-center">
          <Icon type={type} className="size-8 text-muted-foreground" />
        </div>
        <div className="flex flex-col ml-3 max-w-56 text-truncate">
          <Text
            as="span"
            className={cn(
              priority === "high"
                ? "text-raw-red font-bold"
                : "text-primary font-semibold",
              "  text-sm"
            )}
          >
            {title}
          </Text>
          <Text as="span" className="text-xs text-muted-foreground">
            {message}
          </Text>
          <Timestamp iso={timestamp} />
        </div>
        <div className="flex justify-end items-start ml-auto">
          <PriorityPill priority={priority} />
        </div>
      </div>
      <NotificationItemAction
        type={type}
        status={status}
        action={action}
        actionUrl={actionUrl}
        priority={priority}
      />
    </DropdownMenuItem>
  );
};

export default NotificationItem;
