import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div style={{ backgroundColor: "#DDDBD6" }}>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <MarqueeTicker />
        <Works />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
