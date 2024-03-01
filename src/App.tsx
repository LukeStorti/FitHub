import { Classes, Clubs, Footer, Hero, Join, Navbar } from "./components";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="xl:max-w-[1280px] w-full py-8">
          <Navbar />
          <Hero />
          <Join />
          <Clubs />
          <Classes />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
