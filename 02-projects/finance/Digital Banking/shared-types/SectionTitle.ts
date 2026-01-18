export interface SectionPropsTitle {
    haveActionClick: boolean;
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    sectionTitle?: string;
    sectionActionTitle?: string;
    href: string | URL

}