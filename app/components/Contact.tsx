"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import DatePicker from "./DatePicker";
import GuestPicker from "./GuestPicker";

const info = [
  { label: "Address", value: "24, Mittai Theruv, SM Street, Kozhikode, Kerala 673001" },
  { label: "Hours", value: "Tue – Sun: 12:00 PM – 3:30 PM · 7:00 PM – 11:00 PM" },
  { label: "Reservations", value: "+91 98765 43210" },
];

const textFields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
];

export default function Contact() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ padding: "8rem 2rem", scrollMarginTop: "80px" }}
    >
      <div className="contact-grid" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem" }}>

        <Reveal>
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Find Us</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 500, lineHeight: 1.1, marginBottom: "3rem" }}>
              Come Dine<br /><em>With Us</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {info.map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.4rem" }}>{label}</p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem", wordBreak: "break-word" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {textFields.map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                  {label}
                </label>
                <input id={id} type={type} placeholder={placeholder} className="form-input" />
              </div>
            ))}

            <div>
              <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                Preferred Date
              </label>
              <DatePicker value={date} onChange={setDate} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                Number of Guests
              </label>
              <GuestPicker value={guests} onChange={setGuests} min={1} max={20} />
            </div>

            <div>
              <label htmlFor="message" style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                Special Requests
              </label>
              <textarea id="message" rows={3} placeholder="Dietary restrictions, occasions, preferences..." className="form-input" style={{ resize: "vertical" }} />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              Confirm Reservation
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
