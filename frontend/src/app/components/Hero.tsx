import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const lineVariant = {
  hidden: { y: "105%", skewY: 3 },
  visible: (delay: number) => ({
    y: "0%",
    skewY: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  const [time, setTime] = useState("");
  const words = ["CREATIVE", "SOFTWARE"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(id);
  }, [words.length]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        }) + " CET"
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-8"
      style={{ backgroundColor: "#DDDBD6" }}
    >
      {/* Top labels */}
      <div className="flex justify-between items-center">
        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6963" }}
        >
          Software Creative Developer
        </motion.p>
        <motion.p
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6963" }}
        >
          {time}
        </motion.p>
      </div>

      {/* Hero text */}
      <div className="flex flex-col justify-center py-8">
        {/* CREATIVE / SOFTWARE — outline */}
        <div style={{ overflow: "hidden", position: "relative", height: "clamp(4rem, 14vw, 12rem)" }}>
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={lineVariant}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4rem, 14vw, 12rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#DDDBD6",
              WebkitTexpngtStroke: "2px #0D0D0D",
              textTransform: "uppercase",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                style={{ display: "block", position: "absolute", inset: 0 }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* DEVELOPER — filled + red dot */}
        <div style={{ overflow: "hidden", marginTop: "-0.02em" }}>
          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={lineVariant}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4rem, 14vw, 12rem)",
              lineHeight: 0.88,
              textTransform: "uppercase",
              color: "#0D0D0D",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "flex-end",
              gap: "0.05em",
            }}
          >
            DEVELOPER
            <span style={{ color: "#FF1A00" }}>.</span>
          </motion.div>
        </div>

        {/* Tagline */}
        <div style={{ overflow: "hidden", marginTop: "clamp(1.5rem, 3vw, 3rem)" }}>
          <motion.p
            custom={0.65}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "#6B6963", lineHeight: 1.6 }}
          >
            Je conçois et développe des expériences web qui fusionnent<br />
            créativité et performance technique.
          </motion.p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end">
        <motion.div
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-1"
        >
          <div className="flex items-center gap-2">
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FF1A00", display: "inline-block" }}
            />
            <span
              style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0D0D0D" }}
            >
              Disponible pour projets
            </span>
          </div>
          <span
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6963" }}
          >
            Lille, France
          </span>
        </motion.div>

        <motion.a
          href="#work"
          custom={0.9}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-end gap-1 group"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D0D0D" }}
          >
            Scroll ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}