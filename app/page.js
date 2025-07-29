import About from "./components/About";
import Hero from "./components/Hero";
import TopProjects from "./components/TopProjects";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import Testemonials from "./components/Testemonials";
import SubsNews from "./components/SubsNews";

export default function Home() {
  return (
    <div>
      <div className="relative  -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] blur-[200px] bg-main-color"></div>
        <div className="absolute -top-40 right-0 w-[200px] h-[200px] blur-[100px] bg-main-secondary-color"></div>
      </div>

      <Hero />
      <About />
      <TopProjects />
      <Services />
      <Blogs />
      <FAQ />
      <Testemonials />
      <SubsNews />
    </div>
  );
}
