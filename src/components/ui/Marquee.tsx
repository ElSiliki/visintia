import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * Edge-faded infinite marquee. Renders the list twice for a seamless loop;
 * the duplicate is aria-hidden so screen readers see each item once.
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee-pause relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]",
        className,
      )}
    >
      <ul className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-12 whitespace-nowrap text-muted">
            <span className="text-base font-medium tracking-tight">{item}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent/70" />
          </li>
        ))}
      </ul>
      <ul aria-hidden className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-12 whitespace-nowrap text-muted">
            <span className="text-base font-medium tracking-tight">{item}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent/70" />
          </li>
        ))}
      </ul>
    </div>
  );
}
