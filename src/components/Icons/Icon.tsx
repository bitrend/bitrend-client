import type { ReactNode } from "react";

type IconSize = "XXS" | "XS" | "S" | "M" | "L";

interface Props {
  children: ReactNode;
  size?: IconSize;
  color?: string;
  fill?: boolean;
}

const sizeToFontSize: Record<IconSize, number> = {
  XXS: 12,
  XS: 20,
  S: 26,
  M: 30,
  L: 36,
};

const sizeToWeight: Record<IconSize, number> = {
  XXS: 300,
  XS: 200,
  S: 300,
  M: 300,
  L: 300,
};

export function Icon({ children, color, size = "M", fill = false }: Props) {
  return (
    <span
      style={{
        fontFamily: "Material Symbols Rounded",
        lineHeight: "100%",
        fontSize: sizeToFontSize[size],
        color: color,
        fontWeight: sizeToWeight[size],
        fontVariationSettings: `'FILL' ${
          fill ? 1 : 0
        }, 'GRAD' 0, 'opsz' 48dp, 'wght' ${sizeToWeight[size]}`,
      }}
    >
      {children}
    </span>
  );
}
