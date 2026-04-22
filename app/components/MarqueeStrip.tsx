const words = [
  "Fine Dining",
  "Malabar Coast",
  "Mediterranean",
  "Kozhikode",
  "Private Dining",
  "Since 2024",
  "Reservations Open",
  "Two Coastlines",
];

export default function MarqueeStrip() {
  const repeated = [...words, ...words];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "0.9rem 0",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 24s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              whiteSpace: "nowrap",
              padding: "0 2rem",
            }}
          >
            {word}
            <span style={{ color: "var(--accent)", marginLeft: "2rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
