/**
 * Minimal className combiner — dependency-free.
 * Filters falsy values and joins. Sufficient for this project's needs.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
