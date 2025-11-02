import About from "./(sections)/About";
import Footer from "./(sections)/Footer";
import GithubStats from "./(sections)/GithubStats";
import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Skills from "./(sections)/Skills";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <GithubStats />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
