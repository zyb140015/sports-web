import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:brightness-110",
        outline:
          "border-white/10 bg-white/[0.03] text-white backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20",
        secondary:
          "bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        ghost:
          "text-white/70 hover:text-white hover:bg-white/5",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 gap-2",
        xs: "h-8 px-3 text-xs gap-1.5",
        sm: "h-9 px-4 text-sm gap-2",
        lg: "h-14 px-8 text-base gap-2.5",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
