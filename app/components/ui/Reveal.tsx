import type { ReactNode } from "react";

/**
 * Keep sections visible on first paint. Editorial content should not depend on
 * JavaScript or intersection observers before it can be read.
 */
export default function Reveal({ children }: { children: ReactNode; delay?: number }) {
  return <>{children}</>;
}
