import { UserMenuItem } from "@/interfaces/User";
import { Text } from "../Atoms/Text";
import NotificationCenter from "../Organisms/NotificationCenter";
import UserProfileMenu from "../Organisms/UserProfileMenu";
import { Receipt, Settings, User } from "lucide-react";
import { useNotifications } from "@/data/useNotifications";
import AvatarVariant from "../Molecules/AvatarVariant";
import Link from "next/link";
import SearchInput from "../Molecules/SearchInput";
import { useUserProfile } from "@/data/useUserProfile";
const Topbar = () => {
  const profileMenuItems: UserMenuItem[] = [
    {
      id: "profile",
      label: "Profile",
      href: "/dashboard/profile",
      icon: <User className="size-5" />,
    },
    {
      id: "settings",
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="size-5" />,
    },
    {
      id: "billing",
      label: "Billing",
      href: "/dashboard/billing",
      icon: <Receipt className="size-5" />,
    },
  ];
  const notifications = useNotifications();
  // Use unread alerts for the dropdown
  const alerts = notifications.alerts || [];
  const profileInfo = useUserProfile();
  const avatarInfo = profileInfo.personal || [];

  const notificationIcon = "/assets/icons/NotificationBell.svg";
  const settingIcon = "/assets/icons/SettingsIcon.svg";
  return (
    <div className="sticky top-0  z-10 px-8 shadow-card  w-full   bg-white">
      <div className="overflow-hidden">
        <div className="h-[90px] max-h-[90px] size flex items-center lg:justify-between justify-end">
          <Text as="h1" className="text-gradient">
            Overview
          </Text>
          <div className="flex gap-4 items-center">
            <SearchInput />
            <Link href="/dashboard/settings">
              <AvatarVariant
                imageURL={settingIcon}
                sizeAvatarImageSize={11}
                variant="Default"
              />
            </Link>
            <NotificationCenter
              notificationIcon={notificationIcon}
              notificationCountItem={notifications.unreadCount}
              notificationLabel="Notifications"
              notificationitems={alerts}
              notificationToolTip="Mark All As Read"
            />
            <UserProfileMenu
              avatartImageURL={avatarInfo.profileImage}
              avatarSizeClass={12}
              imageFallback={
                avatarInfo.firstName.charAt(0) + avatarInfo.lastName.charAt(0)
              }
              avatarName={avatarInfo.firstName + " " + avatarInfo.lastName}
              menuItems={profileMenuItems}
              avatarJob={avatarInfo.occupation}
              status="online"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
