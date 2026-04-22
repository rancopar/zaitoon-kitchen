"use client";
import { useState, useRef, useEffect } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function DatePicker({ value, onChange }: Props) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  const selected = value ? new Date(value + "T00:00:00") : null;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const selectDay = (day: number) => {
    const mm = String(viewMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    onChange(`${viewYear}-${mm}-${dd}`);
    setOpen(false);
  };

  const isSelected = (day: number) =>
    selected && selected.getFullYear() === viewYear && selected.getMonth() === viewMonth && selected.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day;

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const displayValue = selected
    ? selected.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <div ref={ref} style={{ position: "relative" }}>
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
        <span style={{ color: displayValue ? "var(--text)" : "var(--muted)", fontSize: "0.95rem" }}>
          {displayValue || "Select a date"}
        </span>
        <span style={{ color: open ? "var(--accent)" : "var(--muted)", transition: "color 0.2s" }}>
          <CalendarIcon />
        </span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 100,
          background: "#1a1612", border: "1px solid var(--border)",
          padding: "1.25rem", minWidth: "300px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
        }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <button type="button" onClick={prevMonth} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1.2rem", padding: "0.25rem 0.5rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
            >‹</button>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "var(--text)", letterSpacing: "0.05em" }}>
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button type="button" onClick={nextMonth} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1.2rem", padding: "0.25rem 0.5rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
            >›</button>
          </div>

          {/* Day labels */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: "0.5rem" }}>
            {DAYS.map((d) => (
              <div key={d} style={{ textAlign: "center", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted)", padding: "0.25rem 0" }}>{d}</div>
            ))}
          </div>

          {/* Date grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={"e-" + i} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const past = isPast(day);
              const sel = isSelected(day);
              const tod = isToday(day);
              return (
                <button key={day} type="button" disabled={past} onClick={() => selectDay(day)}
                  style={{
                    background: sel ? "var(--accent)" : "transparent",
                    border: tod && !sel ? "1px solid rgba(212,147,62,0.4)" : "1px solid transparent",
                    color: past ? "#3a3530" : sel ? "var(--bg)" : "var(--text)",
                    fontSize: "0.82rem", padding: "0.45rem 0",
                    cursor: past ? "not-allowed" : "pointer",
                    transition: "background 0.15s, color 0.15s",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => { if (!past && !sel) (e.target as HTMLElement).style.background = "var(--surface2)"; }}
                  onMouseLeave={(e) => { if (!past && !sel) (e.target as HTMLElement).style.background = "transparent"; }}
                >{day}</button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
