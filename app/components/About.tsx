import Reveal from "./Reveal";

const stats = [
  { num: "48", label: "Menu Items" },
  { num: "12+", label: "Years Experience" },
  { num: "200", label: "Seats Available" },
  { num: "3", label: "Private Dining Rooms" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ padding: "8rem 2rem" }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        <Reveal>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>
            Our Story
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 500 }}>
            Two cuisines,
            <br />
            <em>one kitchen</em>
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)", marginBottom: "2rem", opacity: 0.7 }} />
          <p style={{ color: "var(--muted)", lineHeight: 1.95, marginBottom: "1.5rem", fontSize: "0.96rem" }}>
            Zaitoon was born from a simple question: what happens when a Malabar
            chef trained in Beirut comes home to Kozhikode? The answer is a menu
            that does not compromise either tradition.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.95, fontSize: "0.96rem" }}>
            Every dish carries the weight of both coastlines — the warmth of
            Malabar spice, the precision of Mediterranean technique. Nothing is
            fusion for the sake of it.
          </p>
        </Reveal>

        {/* Stats grid — equal height using grid + align-items: stretch */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridAutoRows: "1fr",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
        >
          {stats.map(({ num, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div
                className="stat-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  transition: "border-color 0.25s, background 0.25s",
                }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 600, color: "var(--accent)", lineHeight: 1 }}>
                  {num}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.6rem", letterSpacing: "0.05em" }}>
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
