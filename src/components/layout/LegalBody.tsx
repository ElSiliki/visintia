/** Shared prose styling for legal/long-form copy. */
export function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex max-w-2xl flex-col gap-4 text-muted leading-relaxed
        [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline
        [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground
        [&_li]:text-sm sm:[&_li]:text-base [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2
        [&_ul]:pl-5 [&_li]:list-disc [&_p]:text-sm sm:[&_p]:text-base"
    >
      {children}
    </div>
  );
}

/** Visible marker for legal data still to be filled in (NIF, domicilio, etc.). */
export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[0.72rem] font-medium text-accent">
      [Pendiente: {children}]
    </span>
  );
}
