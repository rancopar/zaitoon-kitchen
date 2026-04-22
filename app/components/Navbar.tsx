"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/#menu" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (isHome && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: "1.25rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(15,13,11,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background 0.5s",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.6rem",
          fontWeight: 600,
          color: "var(--accent)",
          letterSpacing: "0.04em",
          textDecoration: "none",
          lineHeight: 1,
        }}
      >
        Zaitoon
      </Link>

      <nav className="desktop-nav" style={{ display: "flex", gap: "2.5rem" }}>
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="nav-link"
            onClick={() => handleNavClick(href)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link href="/#contact" className="btn-outline desktop-nav">
        Reserve a Table
      </Link>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "100%", left: 0, right: 0,
          background: "rgba(12,10,9,0.99)",
          padding: "1.5rem 2rem 2rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
        }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => handleNavClick(href)}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "1.5rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                padding: "1rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-outline"
            style={{ alignSelf: "flex-start", marginTop: "1.5rem" }}
          >
            Reserve a Table
          </Link>
        </div>
      )}
    </header>
  );
}
