export interface ActivePropsLink {
    href: string;
    children: React.ReactNode;
    className: string;

}
export interface SideBarListDashboardProps {
    // Define any props if needed in the future
    label: string;
    href: string;
    icon: string;
}
export interface SideBarListProps {
    items: SideBarListDashboardProps[];
}

