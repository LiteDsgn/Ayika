"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface TypewriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

export default function Typewriter({ words, delay = 0, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [started, setStarted] = useState(false);

  // Initial start delay
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Cursor blinking effect
  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  // Typing logic
  useEffect(() => {
    if (!started) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      // Finished typing word, wait before deleting
      const timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && isDeleting) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, started]);

  // Calculate the longest word to reserve space and prevent layout shifts
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="relative">
        {/* Invisible placeholder for layout stability */}
        <span className="opacity-0">{longestWord}</span>
        
        {/* Visible typing text */}
        <span className="absolute left-0 top-0 whitespace-nowrap">
          {words[index].substring(0, subIndex)}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block ml-0.5 w-[2px] h-[1em] bg-purple-400 align-middle"
          />
        </span>
      </span>
    </span>
  );
}
