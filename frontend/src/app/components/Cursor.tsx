import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const circleX = useSpring(dotX, { stiffness: 120, damping: 18 });
  const circleY = useSpring(dotY, { stiffness: 120, damping: 18 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        setOnDark(!!target.closest("[data-dark]"));
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hover]")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [dotX, dotY]);

  return (
    <>
      {/* Trailing circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          backgroundColor: "rgba(0,0,0,0)",
          border: isHovered
            ? onDark
              ? "2px solid #DDDBD6"
              : "2px solid #FF1A00"
            : onDark
              ? "1.5px solid #DDDBD6"
              : "1.5px solid #0D0D0D",
          opacity: isClicking ? 0.6 : 0.85,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#FF1A00",
        }}
      />
    </>
  );
}