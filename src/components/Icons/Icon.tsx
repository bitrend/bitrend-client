import type { ReactNode } from "react";

type IconSize = "XXXS" | "XXS" | "XS" | "S" | "M" | "L" | "XL";

interface Props {
  children: ReactNode;
  size?: IconSize;
  color?: string;
  fill?: boolean;
}

const sizeToFontSize: Record<IconSize, number> = {
  XXXS: 14,
  XXS: 12,
  XS: 20,
  S: 26,
  M: 30,
  L: 36,
  XL: 96,
};

const sizeToWeight: Record<IconSize, number> = {
  XXXS: 300,
  XXS: 300,
  XS: 300,
  S: 200,
  M: 300,
  L: 300,
  XL: 300,
};

const sizeToOpsz: Record<IconSize, number> = {
  XXS: 20,
  XS: 20,
  S: 26,
  M: 30,
  L: 36,
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
        fontVariationSettings: `
          'FILL' ${fill ? 1 : 0},
          'GRAD' 0, 
          'opsz' ${sizeToOpsz[size]}, 
          'wght' ${sizeToWeight[size]}`,
      }}
    >
      {children}
    </span>
  );
}
