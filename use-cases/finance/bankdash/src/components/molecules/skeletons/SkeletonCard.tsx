import { Skeleton } from "@/components/atoms/Skeleton";
import { SkeletonCardProps } from "@/interfaces/SkeletonCard";
import { cn } from "@/lib/utils";

export function SkeletonCard({ width, height }: SkeletonCardProps) {
  const mainSkeletonClasses = cn(
    "rounded-xl",

    `h-[${height}]`,
    `w-[${width}]`
  );

  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className={mainSkeletonClasses} />
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
