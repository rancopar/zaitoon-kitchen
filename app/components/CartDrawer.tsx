"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, remove, increment, decrement, total, count } = useCart();

  const handleDecrement = (name: string, quantity: number) => {
    if (quantity <= 1) remove(name);
    else decrement(name);
  };

  return (
    <>
      {open && (
        <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 98, backdropFilter: "blur(4px)" }} />
      )}

      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(420px, 100vw)",
        background: "#131110",
        borderLeft: "1px solid var(--border)",
        zIndex: 99,
        display: "flex", flexDirection: "column",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        {/* Header */}
        <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500 }}>Your Order</h2>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em", marginTop: "0.2rem" }}>
              {count} {count === 1 ? "item" : "items"}
            </p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "1px solid var(--border)", color: "var(--muted)", cursor: "pointer", fontSize: "1rem", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
          >✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>🍽</p>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Your order is empty</p>
              <button onClick={onClose} style={{ marginTop: "1.5rem", background: "none", border: "1px solid var(--border)", color: "var(--muted)", padding: "0.6rem 1.4rem", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >Browse Menu</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {items.map((item) => (
                <div key={item.name} style={{ padding: "1.25rem 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <img src={item.image} alt={item.name} style={{ width: "64px", height: "64px", objectFit: "cover", flexShrink: 0, border: "1px solid var(--border)" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.3rem", lineHeight: 1.3 }}>{item.name}</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--accent)", marginBottom: "0.75rem" }}>{item.price}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <button
                        onClick={() => handleDecrement(item.name, item.quantity)}
                        title={item.quantity <= 1 ? "Remove item" : "Decrease quantity"}
                        style={{ width: "28px", height: "28px", background: "var(--surface)", border: `1px solid ${item.quantity <= 1 ? "rgba(224,90,90,0.4)" : "var(--border)"}`, color: item.quantity <= 1 ? "#e05a5a" : "var(--text)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                      >−</button>
                      <span style={{ fontSize: "0.9rem", minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                      <button onClick={() => increment(item.name)} style={{ width: "28px", height: "28px", background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                      >+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "1.5rem", borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>Subtotal</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "var(--accent)" }}>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <Link href="/checkout" onClick={onClose} className="btn-primary" style={{ display: "block", textAlign: "center", width: "100%" }}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
