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
    borderColor?: string;
    disabled?: boolean;
};

const ActionableCard = ({ bg, offset, onClick, children, paddingX, paddingY, gap, borderColor, disabled }: ActionableCardProps) => {
  return (
      <_.Card 
        bg={bg} 
        offset={offset} 
        onClick={disabled ? undefined : onClick} 
        paddingX={paddingX} 
        paddingY={paddingY} 
        gap={gap} 
        borderColor={borderColor}
        disabled={disabled}
      >
          {children}
      </_.Card>
  )
}

export default ActionableCard