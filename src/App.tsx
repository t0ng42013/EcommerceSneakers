
import { Desc } from "./components/Description/Desc";
import { Hero } from "./components/Hero/Hero";
import { MenuCart } from "./components/MenuCart/MenuCart";
import { Navbar } from "./components/Navbar/Navbar";


import { FaGithub } from "react-icons/fa6";
function App() {
  return (
    <>
      <Navbar />
      <hr className="hidden md:block md:mb-8 md:text-gray-light md:border-1" />
      <main className=" md:flex  md:p-10 md:gap-24 md:items-center">
        <Hero />
        <MenuCart />
        <Desc />
      </main>
      <footer className="flex mx-auto gap-4 md:my justify-center ">
        <a
          href="https://gaston-nucba.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="-8 h-8  hover:animate-bounce"
            src="https://gaston-nucba.vercel.app/assets/logosm.png"
            alt="Developed by Gaston Alonso"
          />
        </a>
        <a
          href="https://github.com/t0ng42013"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl  elemento inset-1 border rounded-full " />
        </a>
      </footer>
    </>
  );
}

export default App;
