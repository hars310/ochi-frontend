import  { useState, useEffect } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Eyes from "./components/Eyes";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import ReadyToStart from "./components/ReadyToStart";
import Reviews from "./components/Reviews";
import LocomotiveScroll from "locomotive-scroll";
import Starting from "./components/Starting";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      document.body.classList.add("show-content"); // Add class to show scrollbar
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      // Initialize LocomotiveScroll when the content is shown
       new LocomotiveScroll({
        smooth: true,
      });
    }
  }, [showContent]);

  return (
    <div className="app min-h-screen overflow-hidden w-full text-white bg-zinc-900">
      {!showContent && (
        <div className="starter  px-32 w-full flex item justify-center py-12 h-screen bg-white">
          <Starting />
        </div>
      )}
      {showContent && (
        <>
          <Navbar />
          <Landing />
          <Marquee />
          <About />
          <Eyes />
          <FeaturedProjects />
          <Reviews />
          <Banner />
          <ReadyToStart />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
