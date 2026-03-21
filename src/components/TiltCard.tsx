import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

// simple wrapper around react-parallax-tilt with sensible defaults
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <Tilt
      className={className}
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.03}
      transitionSpeed={400}
      glareEnable={true}
      glareMaxOpacity={0.2}
    >
      {children}
    </Tilt>
  );
}
