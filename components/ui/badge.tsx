import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-[0.24em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-slate-200 bg-white/80 text-slate-600",
        secondary: "border-transparent bg-slate-900 text-white",
        outline: "border-slate-300 text-slate-700",
        accent: "border-transparent bg-slate-900 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
