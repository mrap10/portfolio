import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
    </div>
  );
}
