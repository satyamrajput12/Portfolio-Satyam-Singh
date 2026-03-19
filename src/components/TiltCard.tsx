import Tilt from "react-tilt";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

// simple wrapper around react-tilt with sensible defaults
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <Tilt
      className={className}
      options={{ max: 25, scale: 1.03, speed: 400, glare: true, "max-glare": 0.2 }}
    >
      {children}
    </Tilt>
  );
}
