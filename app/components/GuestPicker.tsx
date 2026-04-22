"use client";
import { useState } from "react";

interface Props {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
}

const GuestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function GuestPicker({ value, onChange, min = 1, max = 20 }: Props) {
  const [open, setOpen] = useState(false);
  const options = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="form-input"
        style={{
          width: "100%", textAlign: "left", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: open ? "var(--surface2)" : "var(--surface)",
          borderColor: open ? "var(--accent)" : undefined,
        }}
      >
        <span style={{ color: "var(--text)", fontSize: "0.95rem" }}>
          {value} {value === 1 ? "Guest" : "Guests"}
        </span>
        <span style={{ color: open ? "var(--accent)" : "var(--muted)", transition: "color 0.2s" }}>
          <GuestIcon />
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 99 }} />

          {/* Dropdown */}
          <div style={{
            position: "absolute", top: "calc(100% + 8px)", left: 0,
            zIndex: 100, background: "#1a1612",
            border: "1px solid var(--border)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            maxHeight: "260px", overflowY: "auto",
            minWidth: "100%",
          }}>
            {options.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => { onChange(n); setOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "0.75rem 1.25rem",
                  background: value === n ? "rgba(212,147,62,0.1)" : "none",
                  border: "none",
                  borderBottom: "1px solid rgba(46,38,32,0.5)",
                  color: value === n ? "var(--accent)" : "var(--text)",
                  cursor: "pointer", fontSize: "0.9rem",
                  transition: "background 0.15s",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => { if (value !== n) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
                onMouseLeave={(e) => { if (value !== n) (e.currentTarget as HTMLElement).style.background = "none"; }}
              >
                <span>{n} {n === 1 ? "Guest" : "Guests"}</span>
                {value === n && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
