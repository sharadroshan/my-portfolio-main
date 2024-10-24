import { Appbar } from "./components/appbar";
import { Intro } from "./components/home/intro";
import { About } from "./components/home/about";
import { Work } from "./components/home/work";
import { Projects } from "./components/home/projects";
import { Getintouch } from "./components/home/getintouch";
import { Skills } from "./components/home/skills";
import { Technologies } from "./components/home/technologies";

export default function Home() {
  return (
    <main className="bg-navy500">
      <Appbar />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Intro />
        <About />
        <Technologies />
        {/* <Work /> */}
        <Projects />
        <Skills />
        <Getintouch />
      </div>
      <a
        href="mailto:anilprajapati.0809@gmail.com"
        className="flex items-center rotate-90 text-secondary hover:text-white fixed right-[-210px] lg:right-[-200px] bottom-72 text-[18px] lg:text-2xl"
      >
        anilprajapati.0809@gmail.com{" "}
        <div className="h-1 border-b-2 w-[200px] ml-2"></div>
      </a>
    </main>
  );
}
