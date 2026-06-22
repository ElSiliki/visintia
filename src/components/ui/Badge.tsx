import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  /** show the live amber dot before the label */
  live?: boolean;
};

/** Mono eyebrow pill — used as section labels and the "available" indicator. */
export function Badge({ children, className, live = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5",
        "font-mono text-xs uppercase tracking-[0.16em] text-muted backdrop-blur-sm",
        className,
      )}
    >
      {live && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="dot-live h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
