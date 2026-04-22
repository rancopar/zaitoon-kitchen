"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { allDishes, Dish } from "../data/dishes";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = ["Starters", "Seafood", "Meat", "Vegetarian", "Rice & Bread", "Desserts", "Drinks"];

function DishCard({ dish }: { dish: Dish }) {
  const { add, remove, increment, decrement, items } = useCart();
  const cartItem = items.find((i) => i.name === dish.name);
  const quantity = cartItem?.quantity ?? 0;

  const handleDecrement = () => {
    if (quantity <= 1) remove(dish.name);
    else decrement(dish.name);
  };

  return (
    <div className="full-menu-card" style={{ background: "var(--surface)", border: "1px solid var(--border)", overflow: "hidden", transition: "border-color 0.25s, transform 0.25s", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: "190px", overflow: "hidden", flexShrink: 0 }}>
        <img src={dish.image} alt={dish.name} className="dish-img" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }} />
        {dish.tag && (
          <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bg)", background: "var(--accent)", padding: "0.2rem 0.6rem" }}>
            {dish.tag}
          </span>
        )}
        {/* Quantity badge on image */}
        {quantity > 0 && (
          <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "var(--accent)", color: "var(--bg)", width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>
            {quantity}
          </div>
        )}
      </div>

      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.6rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.3, flex: 1 }}>{dish.name}</h3>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "var(--accent)", whiteSpace: "nowrap" }}>{dish.price}</span>
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65, flex: 1, marginBottom: "1.25rem" }}>{dish.desc}</p>

        {/* Add / Quantity controls */}
        {quantity === 0 ? (
          <button
            onClick={() => add(dish)}
            style={{ width: "100%", padding: "0.65rem", background: "transparent", border: "1px solid var(--border)", color: "var(--muted)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
          >
            + Add to Order
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--accent)", background: "rgba(212,147,62,0.06)" }}>
            <button
              onClick={handleDecrement}
              style={{ flex: 1, padding: "0.65rem", background: "none", border: "none", color: quantity <= 1 ? "#e05a5a" : "var(--accent)", cursor: "pointer", fontSize: "1.1rem", transition: "background 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "none"; }}
            >−</button>
            <span style={{ fontSize: "0.9rem", minWidth: "32px", textAlign: "center", color: "var(--accent)", fontWeight: 600 }}>{quantity}</span>
            <button
              onClick={() => increment(dish.name)}
              style={{ flex: 1, padding: "0.65rem", background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontSize: "1.1rem", transition: "background 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "none"; }}
            >+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    categories.forEach((cat) => {
      const el = sectionRefs.current[cat];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveCategory(cat); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToCategory = (cat: string) => {
    setMobileNavOpen(false);
    setTimeout(() => {
      sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section style={{ padding: "10rem 2rem 5rem", background: "radial-gradient(ellipse at 50% 60%, #2a1f0e 0%, #0f0d0b 70%)", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>
          Zaitoon Kitchen
        </p>
        <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", fontWeight: 500, lineHeight: 1.05, marginBottom: "1.5rem" }}>
          The Full Menu
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--muted)", maxWidth: "420px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          48 dishes across seven categories. Tap any dish to add it to your order.
        </p>
        <Link href="/" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", borderBottom: "1px solid var(--border)", paddingBottom: "2px" }}>
          ← Back to Home
        </Link>
      </section>

      {/* Mobile category nav */}
      <div className="mobile-cat-nav" style={{ display: "none" }}>
        {mobileNavOpen && (
          <div onClick={() => setMobileNavOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 88, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }} />
        )}

        {/* Floating toggle */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          title="Browse categories"
          style={{
            position: "fixed", bottom: "2rem", right: "2rem", zIndex: 90,
            width: "52px", height: "52px",
            background: mobileNavOpen ? "var(--accent)" : "#1a1612",
            border: `1px solid ${mobileNavOpen ? "var(--accent)" : "var(--border)"}`,
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.25s",
            boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
          }}
        >
          {mobileNavOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f0d0b" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="13" y2="11" />
            </svg>
          )}
        </button>

        {/* Category panel */}
        <div style={{
          position: "fixed", bottom: "6rem", right: "1.25rem", zIndex: 89,
          background: "#1a1612",
          border: "1px solid var(--border)",
          minWidth: "200px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          transform: mobileNavOpen ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
          opacity: mobileNavOpen ? 1 : 0,
          pointerEvents: mobileNavOpen ? "auto" : "none",
          transition: "transform 0.25s ease, opacity 0.25s ease",
          transformOrigin: "bottom right",
        }}>
          <div style={{ padding: "1rem 1.25rem 0.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)" }}>
              Categories
            </p>
            <p style={{ fontSize: "0.65rem", color: "var(--muted)" }}>{categories.length} sections</p>
          </div>
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat;
            const count = allDishes.filter((d) => d.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", background: isActive ? "rgba(212,147,62,0.08)" : "none",
                  border: "none", cursor: "pointer",
                  padding: "0.85rem 1.25rem",
                  borderBottom: i < categories.length - 1 ? "1px solid rgba(46,38,32,0.6)" : "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
                onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "none"; }}
              >
                <span style={{ fontSize: "0.9rem", color: isActive ? "var(--accent)" : "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.01em" }}>
                  {cat}
                </span>
                <span style={{ fontSize: "0.7rem", color: "var(--muted)", marginLeft: "1rem" }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", position: "relative" }}>

        {/* Dishes */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {categories.map((category) => {
            const dishes = allDishes.filter((d) => d.category === category);
            return (
              <section
                key={category}
                ref={(el) => { sectionRefs.current[category] = el; }}
                style={{ padding: "5rem 2rem", borderBottom: "1px solid var(--border)", background: category === "Desserts" || category === "Drinks" ? "var(--surface)" : "var(--bg)", scrollMarginTop: "80px" }}
              >
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                  <div style={{ marginBottom: "2.5rem", display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
                    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 500 }}>{category}</h2>
                    <span style={{ fontSize: "0.72rem", letterSpacing: "0.16em", color: "var(--muted)", textTransform: "uppercase" }}>{dishes.length} dishes</span>
                  </div>
                  <div className="full-menu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.25rem" }}>
                    {dishes.map((dish) => <DishCard key={dish.name} dish={dish} />)}
                  </div>
                </div>
              </section>
            );
          })}

          <section style={{ padding: "6rem 2rem", textAlign: "center", background: "var(--surface)" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>Ready to Order?</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, marginBottom: "2rem" }}>Open your cart to checkout</h2>
            <Link href="/checkout" className="btn-primary">Go to Checkout</Link>
          </section>
        </div>

        {/* Desktop sticky nav */}
        <div className="category-nav" style={{ width: "180px", flexShrink: 0, padding: "5rem 0 0" }}>
          <div style={{ position: "sticky", top: "5rem", padding: "1.5rem 1.5rem 1.5rem 1rem", borderLeft: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.25rem" }}>Categories</p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button key={cat} onClick={() => scrollToCategory(cat)}
                    style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "0.5rem 0.75rem", fontSize: "0.8rem", color: isActive ? "var(--accent)" : "var(--muted)", borderLeft: `2px solid ${isActive ? "var(--accent)" : "transparent"}`, transition: "all 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                    onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
                  >{cat}</button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
