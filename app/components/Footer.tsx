"use client";
import { useState, useEffect } from "react";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.833.738 5.494 2.028 7.808L0 32l8.396-2.002A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.771-1.854l-.486-.29-4.984 1.188 1.232-4.853-.317-.499A13.226 13.226 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.629-.199-.894.199-.265.398-1.027 1.292-1.258 1.558-.232.265-.464.298-.862.1-.398-.2-1.681-.619-3.203-1.974-1.183-1.055-1.982-2.358-2.214-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.266-.398.398-.663.133-.265.067-.497-.033-.696-.1-.199-.894-2.155-1.226-2.95-.322-.773-.65-.669-.894-.681-.231-.012-.497-.015-.762-.015s-.696.1-.1060.497c-.365.398-1.39 1.358-1.39 3.313s1.423 3.842 1.622 4.107c.199.265 2.8 4.277 6.785 5.998.948.41 1.688.654 2.265.836.952.302 1.818.259 2.503.157.763-.113 2.352-.961 2.684-1.89.333-.928.333-1.722.233-1.89-.099-.166-.364-.265-.762-.464z" />
      </svg>
    ),
  },
];

function RanCoParModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }} />

      <div className="rancopar-modal" style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 201,
        width: "min(480px, 88vw)",
        maxWidth: "100%",
        background: "#131110",
        border: "1px solid var(--border)",
        padding: "2.5rem",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
        overflowX: "hidden",
      }}>
        {/* Close */}
        <button onClick={onClose} style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1rem", transition: "color 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
        >✕</button>

        {/* RanCoPar logo */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 120"
              fill="var(--accent)"
              role="img"
              aria-label="RanCoPar"
              style={{ width: "52px", height: "auto", display: "block" }}
            >
              {/* N — Noushad (vertical bar, the foundation) */}
              <rect x="15" y="10" width="18" height="100" />
              {/* R — Rahmath (bowl, the enclosure) */}
              <path fillRule="evenodd" d="M 33 10 H 55 A 25 25 0 0 1 55 60 H 33 Z M 33 24 H 52 A 12 12 0 0 1 52 46 H 33 Z" />
              {/* A — Adhil (diagonal leg, the generational handoff) */}
              <polygon points="33,65 55,65 82,110 60,110" />
            </svg>
          </div>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
            Proudly Created &amp; Designed by
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.1 }}>
            RanCoPar
          </h2>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", letterSpacing: "0.06em", marginTop: "0.3rem" }}>
            Ran Coding Partner
          </p>
        </div>

        <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.75rem" }} />

        <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "2rem" }}>
          RanCoPar is a passionate development studio focused on building modern, high-quality web products. From concept to deployment — clean code, thoughtful design, and pixel-perfect execution on every project.
        </p>

        {/* Buttons — side by side on desktop, stacked on mobile */}
        <div className="rancopar-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://github.com/rancopar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
              padding: "0.85rem 1.5rem",
              background: "var(--accent)", color: "var(--bg)",
              textDecoration: "none", fontSize: "0.78rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://rancopar.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
              padding: "0.85rem 1.5rem",
              background: "transparent", border: "1px solid var(--border)",
              color: "var(--muted)", textDecoration: "none",
              fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "border-color 0.2s, color 0.2s",
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Website
          </a>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>

        {/* Socials */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem" }}>
          {socials.map(({ name, href, icon }) => (
            <a key={name} href={href} title={name}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center" }}
            >
              <span className="footer-social-name" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>{name}</span>
              <span className="footer-social-icon">{icon}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* Bottom bar */}
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "space-between",
          textAlign: "center",
          gap: "0.5rem",
        }}>
          <p style={{ fontSize: "0.73rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
            © {year} Zaitoon Kitchen, Kozhikode. All rights reserved.
          </p>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.73rem", color: "var(--muted)",
              letterSpacing: "0.06em", transition: "color 0.2s",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              padding: 0,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
          >
            Created by RanCoPar
          </button>
        </div>

      </footer>

      {showModal && <RanCoParModal onClose={() => setShowModal(false)} />}
    </>
  );
}