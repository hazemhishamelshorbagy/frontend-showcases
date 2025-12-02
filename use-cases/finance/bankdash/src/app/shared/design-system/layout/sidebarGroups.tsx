"use client";
import sidebarMenu from "@/data/sidebar-menu.json";
import Link from "next/link";
import { Icon } from "@/app/shared/design-system/Atoms/Icons";
import { Text } from "../Atoms/Text";
import { usePathname } from "next/navigation";

export const sidebarGroups = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-5 w-full" key="main-group">
      {sidebarMenu.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <li
            key={index}
            className={`
              flex relative items-center transition-all
              hover:font-bold hover:border-s-5 hover:border-raw-vibrant-blue
              ${isActive ? " font-bold border-s-4 border-raw-vibrant-blue" : ""}
            `}
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 mx-6 px-4 py-2 rounded"
            >
              <Icon
                type={item.icon}
                className={`size-5 ${
                  isActive ? "text-raw-vibrant-blue" : "text-muted-foreground"
                }`}
              />
              <Text
                as="span"
                className={`text-body-lg ${
                  isActive ? "text-raw-vibrant-blue" : "text-raw-dark-blue"
                }`}
              >
                {item.label}
              </Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default sidebarGroups;
