import * as _ from './styled'
import type { ReactNode } from 'react';

type ActionableCardProps = {
    bg: string;
    offset: string;
    onClick?: () => void;
    children: ReactNode;
    paddingX?: string;
    paddingY?: string;
    gap?: string;
};

const ActionableCard = ({ bg, offset, onClick, children, paddingX, paddingY, gap }: ActionableCardProps) => {
  return (
      <_.Card bg={bg} offset={offset} onClick={onClick} paddingX={paddingX} paddingY={paddingY} gap={gap}>
          {children}
      </_.Card>
  )
}

export default ActionableCard