"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const CHARGES = {
  delivery: { label: "Delivery Charges", amount: 60 },
  packing:  { label: "Packing Charges",  amount: 30 },
  cgst:     { rate: 0.025, label: "CGST (2.5%)" },
  sgst:     { rate: 0.025, label: "SGST (2.5%)" },
};

export default function CheckoutPage() {
  const { items, total, increment, decrement, remove, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const router = useRouter();

  const packingCharges = CHARGES.packing.amount;
  const deliveryCharges = orderType === "delivery" ? CHARGES.delivery.amount : 0;
  const cgst = Math.round(total * CHARGES.cgst.rate);
  const sgst = Math.round(total * CHARGES.sgst.rate);
  const grandTotal = total + packingCharges + deliveryCharges + cgst + sgst;

  // Auto-redirect to menu when cart becomes empty
  useEffect(() => {
    if (!submitted && items.length === 0) {
      router.push("/menu");
    }
  }, [items.length, submitted, router]);

  const handleDecrement = (name: string, quantity: number) => {
    if (quantity <= 1) remove(name);
    else decrement(name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <main>
        <Navbar />
        <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8rem 2rem 4rem", textAlign: "center", background: "radial-gradient(ellipse at 50% 40%, #1a1208 0%, #0f0d0b 70%)" }}>
          <div style={{ width: "64px", height: "64px", border: "1px solid var(--accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", color: "var(--accent)", fontSize: "1.5rem" }}>✓</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500, marginBottom: "1rem" }}>Order Confirmed</h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "400px", marginBottom: "3rem" }}>
            Thank you for your order. We will confirm via WhatsApp within a few minutes.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/menu" className="btn-primary">Order Again</Link>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) return null;

  return (
    <main>
      <Navbar />
      <section style={{ padding: "8rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>Almost there</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500 }}>Checkout</h1>
          </div>

          <div className="checkout-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "flex-start" }}>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

              <div>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Order Type</p>
                <div style={{ display: "flex", gap: "1px", background: "var(--border)" }}>
                  {(["delivery", "pickup"] as const).map((type) => (
                    <button key={type} type="button" onClick={() => setOrderType(type)}
                      style={{ flex: 1, padding: "0.9rem", background: orderType === type ? "var(--accent)" : "var(--surface)", color: orderType === type ? "var(--bg)" : "var(--muted)", border: "none", cursor: "pointer", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", transition: "all 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: orderType === type ? 600 : 400 }}
                    >{type === "delivery" ? "Delivery" : "Pickup"}</button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Contact Details</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { id: "fullname", label: "Full Name", type: "text", placeholder: "Your name", required: true },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", required: true },
                    { id: "email", label: "Email (optional)", type: "email", placeholder: "you@example.com", required: false },
                  ].map(({ id, label, type, placeholder, required }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                        {label} {required && <span style={{ color: "var(--accent)" }}>*</span>}
                      </label>
                      <input id={id} type={type} placeholder={placeholder} required={required} className="form-input" />
                    </div>
                  ))}
                </div>
              </div>

              {orderType === "delivery" && (
                <div>
                  <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Delivery Address</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { id: "address", label: "Street Address", placeholder: "House / Flat, Street" },
                      { id: "area", label: "Area / Landmark", placeholder: "Landmark near you" },
                      { id: "pincode", label: "Pincode", placeholder: "673001" },
                    ].map(({ id, label, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                          {label} <span style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <input id={id} type="text" placeholder={placeholder} required className="form-input" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {orderType === "pickup" && (
                <div style={{ padding: "1.25rem", border: "1px solid var(--border)", background: "var(--surface)" }}>
                  <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.8 }}>
                    Pickup from: <span style={{ color: "var(--text)" }}>24, SM Street, Kozhikode</span><br />
                    Ready in approximately <span style={{ color: "var(--accent)" }}>30–40 minutes</span>
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="notes" style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>Special Instructions</label>
                <textarea id="notes" rows={3} placeholder="Allergies, spice level, packaging preferences..." className="form-input" style={{ resize: "vertical" }} />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Place Order — ₹{grandTotal.toLocaleString("en-IN")}
              </button>
            </form>

            {/* Summary */}
            <div style={{ position: "sticky", top: "6rem" }}>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.5rem" }}>Order Summary</p>

              <div style={{ border: "1px solid var(--border)", background: "var(--surface)", marginBottom: "1px" }}>
                {items.map((item) => (
                  <div key={item.name} style={{ padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)", display: "flex", gap: "1rem", alignItems: "center" }}>
                    <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover", flexShrink: 0, border: "1px solid var(--border)" }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: "0.88rem", fontWeight: 500, marginBottom: "0.2rem" }}>{item.name}</p>
                      <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{item.price} × {item.quantity}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <button onClick={() => handleDecrement(item.name, item.quantity)}
                        style={{ width: "24px", height: "24px", background: "var(--surface2)", border: `1px solid ${item.quantity <= 1 ? "rgba(224,90,90,0.4)" : "var(--border)"}`, color: item.quantity <= 1 ? "#e05a5a" : "var(--text)", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                      <span style={{ fontSize: "0.85rem", minWidth: "16px", textAlign: "center" }}>{item.quantity}</span>
                      <button onClick={() => increment(item.name)}
                        style={{ width: "24px", height: "24px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text)", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ border: "1px solid var(--border)", background: "var(--surface)", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Subtotal</span>
                  <span style={{ fontSize: "0.82rem" }}>₹{total.toLocaleString("en-IN")}</span>
                </div>
                {orderType === "delivery" && (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Delivery Charges</span>
                    <span style={{ fontSize: "0.82rem" }}>₹{CHARGES.delivery.amount}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Packing Charges</span>
                  <span style={{ fontSize: "0.82rem" }}>₹{CHARGES.packing.amount}</span>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>CGST (2.5%)</span>
                    <span style={{ fontSize: "0.8rem" }}>₹{cgst}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>SGST (2.5%)</span>
                    <span style={{ fontSize: "0.8rem" }}>₹{sgst}</span>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>Grand Total</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "var(--accent)" }}>₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <p style={{ fontSize: "0.73rem", color: "var(--muted)", marginTop: "1rem", lineHeight: 1.7 }}>
                {orderType === "delivery" ? "Delivery within Kozhikode city. Estimated time: 45–60 min." : "Pickup ready in 30–40 min from SM Street."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
