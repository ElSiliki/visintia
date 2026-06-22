import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

/** Consistent section header: mono eyebrow → display title → muted lead. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 id={id} className="text-display-sm text-wash max-w-3xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={120}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
