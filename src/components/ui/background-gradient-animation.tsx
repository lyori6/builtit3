"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BackgroundGradientAnimation = ({
  children,
  className,
  containerClassName,
  gradientBackgroundStart = "#00C9B7", // Turquoise accent color
  gradientBackgroundEnd = "#4F46E5", // Purple secondary color
  firstColor = "#00C9B7", // Turquoise
  secondColor = "#4F46E5", // Purple
  thirdColor = "#18B2DE", // Blend of the two
  fourthColor = "#7B61FF", // Lighter purple
  fifthColor = "#00E5D0", // Lighter turquoise

  size = "100%",
  blendingValue = "screen",
  opacity = 0.8,
  interactive = true,
  containerStyle,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;

  size?: string;
  blendingValue?: string;
  opacity?: number;
  interactive?: boolean;
  containerStyle?: React.CSSProperties;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [cursorMoved, setCursorMoved] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!interactiveRef.current) return;
    
    const rect = interactiveRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPosition({ x, y });
    setCursorMoved(true);
  };

  useEffect(() => {
    if (!interactive || !interactiveRef.current) return;
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[inherit]",
        containerClassName
      )}
      style={containerStyle}
      ref={interactiveRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
          className
        )}
        style={
          {
            "--gradient-background-start": gradientBackgroundStart,
            "--gradient-background-end": gradientBackgroundEnd,
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
          } as React.CSSProperties
        }
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: cursorMoved && hovered ? opacity : opacity * 0.5,
          x: cursorMoved && hovered ? cursorPosition.x - 200 : 0,
          y: cursorMoved && hovered ? cursorPosition.y - 200 : 0,
        }}
        transition={{
          scale: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 6,
          },
          opacity: {
            duration: 0.5,
          },
          x: {
            duration: 0.1,
          },
          y: {
            duration: 0.1,
          },
        }}
        style={{
          mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
        }}
        className="pointer-events-none absolute left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,_white_0%,_transparent_75%)]"
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[2]",
          "bg-red-500/10" // Temporary debug background
        )}
        style={{
          mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
          filter: "blur(0px)",
        }}
      >
        <svg width="100%" height="100%" style={{ border: '2px solid yellow' }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15" // Reduced blur
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" mode="normal" />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <motion.circle
              cx="50%"
              cy="30%"
              r={size}
              fill={firstColor}
              style={{ opacity: 1 }} // Ensure full opacity
              animate={{
                x: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                y: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                scale: [1, 1.1, 0.9, 1.2, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="70%"
              cy="50%"
              r={size}
              fill={secondColor}
              style={{ opacity: 1 }} // Ensure full opacity
              animate={{
                x: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                y: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                scale: [1.2, 0.8, 1, 1.1, 1.2],
              }}
              transition={{
                duration: 25 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="30%"
              cy="50%"
              r={size}
              fill={thirdColor}
              style={{ opacity: 1 }} // Ensure full opacity
              animate={{
                x: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                y: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                scale: [0.9, 1.1, 1.3, 1, 0.9],
              }}
              transition={{
                duration: 22 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="50%"
              cy="70%"
              r={size}
              fill={fourthColor}
              style={{ opacity: 1 }} // Ensure full opacity
              animate={{
                x: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                y: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                scale: [1.3, 0.8, 1.1, 0.9, 1.3],
              }}
              transition={{
                duration: 18 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="20%"
              cy="30%"
              r={size}
              fill={fifthColor}
              style={{ opacity: 1 }} // Ensure full opacity
              animate={{
                x: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                y: [
                  -30 - Math.random() * 40,
                  30 + Math.random() * 40,
                  -30 - Math.random() * 40,
                ],
                scale: [1, 1.2, 0.8, 1.1, 1],
              }}
              transition={{
                duration: 24 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
