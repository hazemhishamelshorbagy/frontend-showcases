import React from "react";
import { Text } from "@/app/shared/design-system/Atoms/Text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/shared/design-system/Molecules/DropdownMenu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/shared/design-system/Atoms/AvatarImage";
import AvatarVariant from "@/app/shared/design-system/Molecules/AvatarVariant";
import Link from "next/link";
import { UserProfileMenuProps } from "@/app/shared/interfaces/User";
import { LogOut } from "lucide-react";

// 🎯 Corrected Component
const UserProfileMenu = ({
  avatartImageURL,
  imageFallback,
  avatarSizeClass,
  status,
  avatarName,
  avatarJob,
  menuItems,
}: UserProfileMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AvatarVariant
          status={status}
          imageURL={avatartImageURL}
          fallbackText={imageFallback}
          sizeAvatarImageSize={avatarSizeClass}
          variant="withBadge"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-52 bg-white border-0 shadow-card"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel>
          <div className="flex gap-3 items-center">
            <Avatar className={`size-${avatarSizeClass} `}>
              {/* Using the 'image' prop */}
              <AvatarImage src={avatartImageURL} />

              {/* Using the 'imagefallback' prop */}
              <AvatarFallback>{imageFallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ">
              <Text
                as="h6"
                className="text-raw-vibrant-blue text-sm  font-bold"
              >
                {avatarName}
              </Text>
              <Text as="body-small" className="text-raw-muted-blue text-xs">
                {avatarJob}
              </Text>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator
          className="bg-neutral-200
        "
        />

        {/* Mapping over the 'dropdownitems' array */}
        {menuItems.map((item) => (
          <DropdownMenuItem
            className="p-3  focus:bg-blue-100 hover:text-raw-vibrant-blue transition-all"
            key={item.id}
            asChild
          >
            <div className="flex gap-1 items-center">
              {item.icon}
              <Link
                className="text-body-lg text-raw-dark-blue "
                href={item.href}
              >
                {item.label}
              </Link>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator
          className="bg-neutral-200
        "
        />
        <DropdownMenuItem className="p-3 hover:bg-blue-100 focus:bg-blue-100 hover:text-raw-vibrant-blue transition-all">
          <LogOut className="size-5" />
          {/* <LogOut className="mr-2 h-4 w-4" /> */}
          <Text as="h6" className="text-body-lg text-secondary-foreground">
            Logout
          </Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileMenu;
