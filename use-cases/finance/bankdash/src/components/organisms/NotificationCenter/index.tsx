import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/molecules/DropdownMenu";
import { Text } from "@/components/atoms/Text";

import AvatarVariant from "@/components/molecules/AvatarVariant";
import { Badge } from "@/components/atoms/Badge";
import { Eye, Settings } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atoms/Tooltip";
import { NotificationProps } from "@/interfaces/Notifications";
import NotificationItem from "@/components/molecules/notifications/NotificationItem";

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
        <div className="size-12 relative ">
          <AvatarVariant
            imageURL={notificationIcon}
            sizeAvatarImageSize={11}
            variant="Default"
          />
          <Badge
            variant={"outline"}
            className="bg-raw-vibrant-blue top-0 end-0 size-4 absolute p-1 font-light  border-0 items-center rounded-3xl"
          >
            <Text as="span" className="font-light text-white">
              {notificationCountItem}
            </Text>
          </Badge>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-96 bg-white border-0 shadow-card max-h-96 overflow-y-auto"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel className="sticky -top-1 flex items-center h-16 bg-white z-10 border-b border-neutral-200 ">
          <div className="flex w-full  items-center justify-between ">
            <Text as="span" className="text-muted-foreground">
              {notificationLabel}
            </Text>
            <div className="notification-count flex gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={markAllAsRead}
                    variant="link"
                    size={"sm"}
                    className="text-sm size-8 flex gap-2"
                  >
                    <Settings className="size-6" />
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
