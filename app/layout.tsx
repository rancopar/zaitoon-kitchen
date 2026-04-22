import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import CartButton from "./components/CartButton";

export const metadata: Metadata = {
  title: "Zaitoon Kitchen — Fine Dining, Kozhikode",
  description: "Fine dining where the Malabar Coast meets the Mediterranean. Reserve your table at Zaitoon Kitchen, Kozhikode.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartButton />
        </CartProvider>
      </body>
    </html>
  );
}
