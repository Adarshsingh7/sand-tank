/** @format */
import Moving from "./componenets/section2.jsx";
import Hero from "./componenets/hero.jsx";
import Testimonials from "./componenets/testimonials.jsx";
import Work from "./componenets/work.jsx";
import About from "./componenets/about.jsx";
import Faq from "./componenets/faq.jsx";

function App() {
  return (
    <>
      <div className='px-6'>
        {/* <Header /> */}
        <Hero />
        <Moving />
        <Work />
        <Testimonials />
        <About />
        <Faq />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
