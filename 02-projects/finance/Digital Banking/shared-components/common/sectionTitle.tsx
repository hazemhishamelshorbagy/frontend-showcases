import { SectionPropsTitle } from "@/shared-types/SectionTitle";
import React from "react";
import { Text } from "./TextVariant";
import { Button } from "./button";
import Link from "next/link";

export const sectionTitle: React.FC<SectionPropsTitle> = ({
  sectionTitle,
  sectionActionTitle,
  className,
  haveActionClick,
  onClick,
  href,
}) => {
  return (
    <div className="mb-7">
      <div className="flex  justify-between">
        <Text variant={"h2"} color={"secondary"}>
          {sectionTitle}
        </Text>
        {sectionActionTitle && (
          <div className={className}>
            {haveActionClick ? (
              <Button variant={"default"} onClick={onClick}>
                {sectionActionTitle}
              </Button>
            ) : (
              <Link href={href} className="text-bankdash-text">
                {sectionActionTitle}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
