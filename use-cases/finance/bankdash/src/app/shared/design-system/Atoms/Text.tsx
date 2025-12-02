"use client";

import { cn } from "@/app/shared/lib/utils";
import * as React from "react";

// Define the valid HTML element types and your custom typography names
type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  // Typographic Scale definitions, which should align with your 'fontSize' keys
  | "body-one"
  | "body-two"
  | "body-small"
  | "button-medium"
  | "button-2"
  // Default HTML elements
  | "p"
  | "span";

// TextProps is now just the base HTML attributes plus the 'as' prop.
// All styling is expected to be passed via className.
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement;
  children?: React.ReactNode;
}

/**
 * A simple typography wrapper component that dynamically renders
 * the appropriate HTML tag and merges Tailwind classes for styling.
 * Styling (size, weight, color) must be applied using utility classes
 * defined in your tailwind.config.ts (e.g., "text-h1 text-brand-p2") passed via the className prop.
 */
const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as = "p", className, ...props }, ref) => {
    // Determine the HTML element type dynamically
    const Component = as as React.ElementType;

    return (
      <Component
        ref={ref}
        // Merge the optional base class "text-inherit" (to ensure color inheritance
        // if needed) with the user-provided classes.
        className={className}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export { Text };
export type { TextProps };
