
export interface UserMenuItem {
    id: string;
    label: string;
    href: string; // The destination path (e.g., /dashboard/profile)
    icon: any
    // You might add an optional 'icon' property here (e.g., React.ElementType)
}
export interface UserProfileMenuProps {
    avatarSizeClass: number;

    status: "online" | "offline" | "busy";
    avatartImageURL: string;
    imageFallback: string;
    avatarName: string;
    avatarJob: string;
    menuItems: UserMenuItem[];
}