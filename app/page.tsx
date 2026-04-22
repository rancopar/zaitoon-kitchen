import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <MarqueeStrip />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
}
