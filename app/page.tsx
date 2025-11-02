import About from "./components/About";
import GithubStats from "./components/GithubStats";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <GithubStats />
    </div>
  );
}
