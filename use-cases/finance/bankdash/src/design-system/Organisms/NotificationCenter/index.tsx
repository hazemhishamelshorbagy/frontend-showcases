import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/design-system/Molecules/DropdownMenu";
import { Text } from "@/design-system/Atoms/Text";

import AvatarVariant from "@/design-system/Molecules/AvatarVariant";
import { Badge } from "@/design-system/Atoms/Badge";
import { Eye } from "lucide-react";
import { Button } from "@/design-system/Atoms/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/design-system/Atoms/Tooltip";
import { NotificationProps } from "@/interfaces/Notifications";
import NotificationItem from "@/design-system/Molecules/notifications/NotificationItem";

const NotificationCenter = ({
  notificationIcon,
  notificationLabel,
  notificationToolTip,
  notificationCountItem,
  notificationitems,
  markAllAsRead,
}: NotificationProps) => {
  // Use notifications from JSON

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AvatarVariant
          imageURL={notificationIcon}
          sizeAvatarImageSize={11}
          variant="Default"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-96 bg-white border-0 shadow-card max-h-96 overflow-y-auto"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel className="sticky -top-1 flex items-center h-16 bg-white z-10 border-b ">
          <div className="flex w-full  items-center justify-between ">
            <Text as="span" className="text-muted-foreground">
              {notificationLabel}
            </Text>
            <div className="notification-count flex gap-3">
              <Badge
                variant={"outline"}
                className="bg-raw-warm-orange flex px-3 gap-2 font-light text-white py-0.5 border-0 items-center rounded-3xl"
              >
                <Text as="span" className=" text-white">
                  {notificationCountItem}
                </Text>
                New
              </Badge>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={markAllAsRead}
                    variant="link"
                    size={"sm"}
                    className="text-sm flex gap-2"
                  >
                    <Eye />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-primary-foreground">
                  <Text as="span" className="text-primary">
                    {notificationToolTip}
                  </Text>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </DropdownMenuLabel>

        {/* Render alerts from notifications.json */}
        {notificationitems.map((item) => (
          <NotificationItem {...item} key={item.id} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationCenter;
