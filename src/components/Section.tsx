import type { CSSProperties, ReactNode } from "react";

import { COLORS } from "../lib/theme-tokens";

interface SectionProps {
  id?: string;
  bg?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function Section({
  id,
  bg = COLORS.warmWhite,
  children,
  style = {},
}: SectionProps) {
  return (
    <section
      id={id}
      style={{ padding: "100px 24px", background: bg, ...style }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
