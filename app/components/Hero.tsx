import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "7rem 2rem 5rem",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 65% 35%, #301e08 0%, #1a1008 40%, #0a0806 100%)",
      }}
    >
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "220px", background: "linear-gradient(to top, var(--bg), transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div className="hero-deco" style={{ position: "absolute", top: "10rem", right: "10%", width: "1px", height: "180px", background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", zIndex: 2 }} />

      <div className="hero-deco" style={{ position: "absolute", top: "10rem", right: "calc(10% + 1.75rem)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)", writingMode: "vertical-rl", zIndex: 2 }}>
        Est. 2024 · Kozhikode
      </div>

      <div style={{ position: "relative", zIndex: 3, maxWidth: "820px" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "2rem" }}>
          Kozhikode, Kerala
        </p>

        <h1 style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)", lineHeight: 1.02, fontWeight: 500, marginBottom: "2rem", letterSpacing: "-0.01em" }}>
          Where the Coast
          <br />
          <em style={{ color: "var(--accent-light)", fontStyle: "italic" }}>Meets the Sea</em>
        </h1>

        <div style={{ width: "48px", height: "1px", background: "var(--accent)", marginBottom: "1.75rem", opacity: 0.6 }} />

        <p style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: "440px", lineHeight: 1.85, marginBottom: "3rem" }}>
          Malabar spices, Mediterranean technique. A dining experience rooted in two ancient coastlines.
        </p>

        <div className="hero-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/menu" className="btn-primary">View Menu</Link>
          <a href="#about" className="btn-secondary">Our Story</a>
        </div>
      </div>
    </section>
  );
}
