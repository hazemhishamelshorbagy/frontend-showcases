import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/design-system/Atoms/AvatarImage"; // Adjust path if necessary
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react"; // For the 'withTimeAndState' variant

// 1. Refined Props (as defined above)
interface AvatarVariantProps {
  imageURL: string;
  sizeAvatarImageSize: number;
  fallbackText?: string;
  status?: "online" | "offline" | "busy";
  timeAgo?: string;
  className?: string;
  variant: "withBadge" | "Default" | "withTimeAndState";
}

const AvatarVariant: React.FC<AvatarVariantProps> = ({
  imageURL,
  fallbackText,
  status,
  timeAgo,
  className,
  sizeAvatarImageSize,
  variant = "Default",
}) => {
  // 2. Map status to a Tailwind color class (Only used if status is defined)
  const statusColor = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
  }[status || "offline"];

  // --- RENDERING VARIANTS ---

  // --- 1. Badge Component (for 'withBadge' variant)
  const renderBadge = () => {
    if (variant === "withBadge" && status) {
      return (
        <div
          className={cn(
            "absolute bottom-0 right-0 h-3 w-3 rounded-full ",
            statusColor
          )}
        />
      );
    }
    return null;
  };

  // --- 2. Time/State Footer (for 'withTimeAndState' variant)
  const renderTimeAndState = () => {
    if (variant === "withTimeAndState" && timeAgo) {
      return (
        <div
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 
                        flex items-center space-x-1 text-xs text-muted-foreground bg-background px-1 rounded-full border"
        >
          <Clock className="h-3 w-3" />
          <span>{timeAgo}</span>
        </div>
      );
    }
    return null;
  };

  // --- Main Render ---
  return (
    <div className={cn("relative w-fit h-fit", className)}>
      {/* Avatar component gets the size from the parent div via the className prop */}
      <Avatar className="h-full w-full">
        <AvatarImage
          className={`size-${sizeAvatarImageSize}`}
          src={imageURL}
          alt={fallbackText}
        />
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>

      {renderBadge()}
      {renderTimeAndState()}
    </div>
  );
};

export default AvatarVariant;
