import * as _ from "./styled";
import type { ReactNode } from "react";

type ActionableCardProps = {
  bg: string;
  hv?: string;
  offset: string;
  onClick?: () => void;
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  gap?: string;
  borderColor?: string;
};

const ActionableCard = ({
  bg,
  hv,
  offset,
  onClick,
  children,
  paddingX,
  paddingY,
  gap,
  borderColor,
}: ActionableCardProps) => {
  return (
    <_.Card
      hv={hv}
      bg={bg}
      offset={offset}
      onClick={onClick}
      paddingX={paddingX}
      paddingY={paddingY}
      gap={gap}
      borderColor={borderColor}
    >
      {children}
    </_.Card>
  );
};

export default ActionableCard;
