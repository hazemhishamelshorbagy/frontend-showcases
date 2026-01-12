import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("transition-colors", {
  variants: {
    variant: {
      h1: "text-3xl font-bold lg:text-4xl",
      h2: "text-2xl font-semibold lg:text-3xl",
      h3: "text-xl font-semibold lg:text-2xl",
      h4: "text-lg font-medium lg:text-xl",
      h5: "text-base font-medium",
      h6: "text-sm font-medium",
      p: "text-base leading-relaxed",
      span: "text-sm inline-block",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      primary: "text-bankdash-primary",
      secondary: "text-bankdash-text",
      muted: "text-bankdash-text-secondary",
      success: "text-bankdash-success",
      error: "text-bankdash-error",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, weight, color, as, ...props }, ref) => {
    // تحديد الوسم (Tag) بناءً على الـ variant أو الـ 'as' prop
    const Component = as || (variant as any) || "p";

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, weight, color, className }))}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export { Text };
