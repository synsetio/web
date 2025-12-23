import React, { useRef, useState, ElementType } from "react";
import { motion, MotionProps } from "framer-motion";

interface MagneticButtonProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // How strong the magnetic pull is (default: 0.5)
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  as?: ElementType;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  strength = 0.5,
  onClick,
  type = "button",
  disabled = false,
  as: Component = "button",
  ...props
}) => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      // Only pass 'type' and 'disabled' if it's a button
      {...(Component === "button" ? { type, disabled } : {})}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default MagneticButton;
