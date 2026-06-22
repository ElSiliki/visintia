import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** draw a hairline at the top of the section */
  divider?: boolean;
  /** remove the default container wrapper for full-bleed content */
  bleed?: boolean;
  containerClassName?: string;
};

/** Vertical rhythm + optional hairline + container, in one place. */
export function Section({
  divider = false,
  bleed = false,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-32",
        divider && "border-t border-border",
        className,
      )}
      {...props}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
