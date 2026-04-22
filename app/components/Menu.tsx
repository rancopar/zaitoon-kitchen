"use client";
import Link from "next/link";
import Reveal from "./Reveal";
import { featuredDishes } from "../data/dishes";

export default function Menu() {
  return (
    <section
      id="menu"
      className="section-pad"
      style={{ padding: "8rem 2rem", background: "var(--surface)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: "4.5rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
              What We Serve
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 500 }}>
              Featured Dishes
            </h2>
          </div>
        </Reveal>

        <div
          className="menu-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {featuredDishes.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="menu-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", gap: "1rem" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.3, flex: 1 }}>
                    {item.name}
                  </h3>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "var(--accent)", whiteSpace: "nowrap" }}>
                    {item.price}
                  </span>
                </div>
                <p style={{ fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: item.tag ? "1rem" : 0 }}>
                  {item.desc}
                </p>
                {item.tag && (
                  <span style={{ fontSize: "0.67rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid rgba(212,147,62,0.4)", padding: "0.22rem 0.65rem", display: "inline-block" }}>
                    {item.tag}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* View Full Menu button */}
        <Reveal>
          <div style={{ marginTop: "3.5rem", display: "flex", justifyContent: "center" }}>
            <Link
              href="/menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2.5rem",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
            >
              View Full Menu
              <span style={{ fontSize: "1rem" }}>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
