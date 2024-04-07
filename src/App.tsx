
import { Desc } from "./components/Description/Desc";
import { Hero } from "./components/Hero/Hero";
import { MenuCart } from "./components/MenuCart/MenuCart";
import { Navbar } from "./components/Navbar/Navbar";

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
      <footer>
        <a
          href="https://gaston-nucba.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto md:my-8 h-8"
            src="https://gaston-nucba.vercel.app/assets/logosm.png"
            alt="logo"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
