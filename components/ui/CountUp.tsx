"use client"
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 2, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  
  // Parse the numeric part and any non-numeric suffix/prefix
  const numericValue = typeof value === "string" 
    ? parseFloat(value.replace(/[^0-9.-]+/g, "")) 
    : value;
    
  const suffix = typeof value === "string" ? value.replace(/[0-9.-]+/g, "") : "";
  // Check if suffix is at start or end
  const prefix = typeof value === "string" && !value.match(/^[0-9]/) 
    ? value.match(/^[^0-9.-]+/)?.[0] || "" 
    : "";
    
  const finalSuffix = typeof value === "string" ? value.replace(prefix, "").replace(/[0-9.-]+/g, "") : "";

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });
  
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      // Handle integer vs float logic
      if (Number.isInteger(numericValue)) {
        setDisplayValue(Math.floor(latest).toLocaleString());
      } else {
        setDisplayValue(latest.toFixed(1));
      }
    });
  }, [springValue, numericValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{finalSuffix}
    </span>
  );
}
