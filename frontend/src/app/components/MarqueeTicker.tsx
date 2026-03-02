const items = [
  "React", "★", "Angular", "★", "TypeScript", "★",
  "Rust", "★", "Java", "★", "Figma", "★",
  "Node.js", "★", "Tailwind", "★", "Docker", "★",
  "PHP", "★", "PostgreSQL", "★", "CI/CD", "★",
  "React", "★", "Angular", "★", "TypeScript", "★",
  "Rust", "★", "Java", "★", "Figma", "★",
  "Node.js", "★", "Tailwind", "★", "Docker", "★",
  "PHP", "★", "PostgreSQL", "★", "CI/CD", "★",
];

export function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden border-y"
      data-dark
      style={{
        backgroundColor: "#0D0D0D",
        borderColor: "#0D0D0D",
        paddingTop: "14px",
        paddingBottom: "14px",
      }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: item === "★" ? 400 : 700,
              fontSize: item === "★" ? "0.7rem" : "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: item === "★" ? "#FF1A00" : "#DDDBD6",
              marginRight: "1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
