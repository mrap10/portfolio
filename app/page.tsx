import About from "./(sections)/About";
import Footer from "./(sections)/Footer";
import GithubStats from "./(sections)/GithubStats";
import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Skills from "./(sections)/Skills";
import MoveToTop from "@/components/ui/move-to-top";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black">
      <Hero />
      <About />
      <GithubStats />
      <Projects />
      <Skills />
      <Footer />
      <MoveToTop />
    </div>
  );
}
