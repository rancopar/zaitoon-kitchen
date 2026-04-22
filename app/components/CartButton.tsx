"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();

  if (count === 0 || pathname === "/checkout") return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
          zIndex: 97,
          background: "var(--accent)",
          border: "none",
          cursor: "pointer",
          height: "52px",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          boxShadow: "0 8px 32px rgba(212,147,62,0.35)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(212,147,62,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(212,147,62,0.35)";
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f0d0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0f0d0b", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Order ({count})
        </span>
      </button>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
